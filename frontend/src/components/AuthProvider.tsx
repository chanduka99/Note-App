import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";
import axios from 'axios';
import { error } from "console";


const AuthContext = createContext(undefined);

export function useAuth() {

    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return authContext;
}

interface AuthProviderProps {
    children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<undefined | null | string>(); // token value here will be undefined

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const resposne = await api.get('/api/get-me');
                setToken(resposne.data.accessToken);
            } catch (error) {
                setToken(null); // token value at mounting wil be undefined. and after the req is done it will be set null upon error. undefined and null will help to determine before mounting and after the req is done
            }
        }

        fetchMe();
    }, []);


    //interceptor for every request
    useLayoutEffect(() => {
        const authInterceptor = api.interceptors.request.use((config: any) => {
            config.headers.Authoriztion = !config._retry && token ? `Bearer ${token}` : config.headers.Authorization;
            return config;
        })

        return () => {
            api.interceptors.request.eject(authInterceptor);
        }
    }, [token]);

    //interceptor for the server response
    useLayoutEffect(() => {
        const refreshInterceptor = api.interceptors.request.use(async (error: any) => {
            const originalRequest = error.config;

            if (
                error.response.status === 403 &&
                error.response.data.message === 'Unathourized'
            ) {
                try {
                    const response = await api.get('/api/refreshToken');

                    setToken(response.data.accessToken);

                    originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                    originalRequest._retry = true;

                    return api(originalRequest);
                } catch (error) {
                    setToken(null);
                }
            }

            return Promise.reject(error);
        });
        return () => {
            api.interceptors.response.eject(refreshInterceptor);
        }
    }, []);

}