import { NextFunction, Request, Response } from "express";
import { User } from '../models/user.models';
import { error } from "console";

async function getUserHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, id } = req.query;

        if (!email && !id) {
            const error = new Error('Please provide either email or id as a query parameter');
            (error as any).status = 400;
            throw error;
        }

        let user;

        if (email) {
            user = await User.findOne({ email: email as string }, { password: 0 });
        } else if (id) {
            user = await User.findById(id as string, { password: 0 });
        }

        if (!user) {
            const error = new Error('User not found');
            (error as any).status = 404;
            throw error;
        }

        res.json(user);
    } catch (error) {
        next(error);
        console.log("getUserHandler Error: ", error)
    }
};

export default getUserHandler;