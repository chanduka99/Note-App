import { Request, Response } from "express";


async function addNoteHandler(req: Request, res: Response) {
    try {
        console.log("request: ", req);
    } catch (error) {
        console.log("addNoteHandlerError: ", error);
    }

}

export default addNoteHandler;