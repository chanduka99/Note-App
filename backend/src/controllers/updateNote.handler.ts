import { Request, Response } from "express";


async function updateNoteHandler(req: Request, res: Response) {
    try {
        console.log("request: ", req);
    } catch (error) {
        console.log("updateNoteHandlerError: ", error);
    }

}

export default updateNoteHandler;