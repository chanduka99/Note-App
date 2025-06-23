import { Request, Response } from "express";


async function allNotesHandler(req: Request, res: Response) {
    try {
        console.log("request: ", req);
    } catch (error) {
        console.log("allNotesHandlerError: ", error);
    }

}

export default allNotesHandler;