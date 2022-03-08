import { Response, Request, NextFunction } from "express";
import { createUniversityService, listUniversityService} from "../services/university.service";

export const createUniversity = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body
        const university = await createUniversityService(data)
        res.send({data: university})
    }catch(err){
        next(err)
    }  
}

export const listUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const queryParams = req.query
        const universities = await listUniversityService(queryParams)
        res.send({data: universities})
    }catch(err){
        next(err)
    }
}

export const getOneUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    res.send("OK")
}

export const updateUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    res.send("OK")
}

export const deletUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    res.send("OK")
}