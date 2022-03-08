import { Response, Request, NextFunction } from "express";
import { createUniversityService, listUniversityService, updateUniversityService, deleteUniversityService, getOneUniversityService} from "../services/university.service";

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
    try{
        const {id} = req.params
        const university = await getOneUniversityService(id)
        res.send({data: university})
    }catch(err){
        next(err)
    } 
}

export const updateUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const {id} = req.params
        const data = req.body
        await updateUniversityService(id, data)
        const universityUpdated = await  getOneUniversityService(id)
        res.send({data: universityUpdated})  
    }catch(err){
        next(err)
    }
}

export const deleteUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const {id} = req.params
        await deleteUniversityService(id)
        res.send({data: "university deleted"})
    }catch(err){
        next(err)
    }    
}

