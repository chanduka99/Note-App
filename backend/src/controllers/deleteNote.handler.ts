import { Request, Response } from "express";


async function deleteNoteHandler(req: Request, res: Response) {
    try {
        console.log("request: ", req);
    } catch (error) {
        console.log("deleteNoteHandlerError: ", error);
    }

}

export default deleteNoteHandler;