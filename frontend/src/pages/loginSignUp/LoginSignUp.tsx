import React from 'react'
import { LoginForm } from "@/pages/loginSignUp/components/LoginForm"
interface Props { }

function LoginSignUp(props: Props) {
    const { } = props

    return (
        <div className='flex justify-center items-center w-full h-[100vh]'>
            <LoginForm className='w-1/4' />
        </div>
    )
}

export default LoginSignUp;
