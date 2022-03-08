import { NextFunction, Request, Response } from "express";
import University from "../models/university";
import { ErrorHandler } from "../utils/error";

export const universityExists = async (req: Request, res: Response, next: NextFunction) => {
    
    const data = req.body

    const universities = await University.findOne({name: data.name, country: data.country, alpha_two_code: data.alpha_two_code})
    if(universities){
        next(new ErrorHandler(409, "This university already exists"))
    }
    
    next()

}