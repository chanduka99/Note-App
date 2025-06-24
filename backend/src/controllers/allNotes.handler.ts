import { NextFunction, Request, Response } from "express";
import { Note } from '../models/note.models';

async function allNotesHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        next(error);
        console.log("allNotesHandlerError: ", error);
    }

}

export default allNotesHandler;