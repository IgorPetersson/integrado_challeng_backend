import { NextFunction, Request, Response } from "express";
import University from "../models/university";
import { ErrorHandler } from "../utils/error";

export const universityNotFound = async (req: Request, res: Response, next: NextFunction) => {
    
    const id = req.params.id

    const university = await University.findOne({_id: id})

    if(!university){
        next(new ErrorHandler(404, "university not found"))
    }
    
    next()
}