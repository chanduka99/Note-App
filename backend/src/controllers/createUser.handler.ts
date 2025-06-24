import { NextFunction, Request, Response } from "express";
import { User } from '../models/user.models';
import { error } from "console";

async function createUserHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error('Email and password are required');
            (error as any).status = 400;
            throw error;
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error('User with this email already exists');
            (error as any).status = 409;
            throw error;
        }

        const newUser = new User({ email, password });
        const savedUser = await newUser.save();
        res.status(201).json({ id: savedUser._id, email: savedUser.email });
    } catch (error) {
        next(error);
        console.log("createUserHandler Error: ", error)
    }
};

export default createUserHandler;