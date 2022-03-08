import { Response, Request, NextFunction } from "express";
import { createUniversityService, listUniversityService, updateUniversityService, deleteUniversityService, getOneUniversityService} from "../services/university.service";

export const createUniversity = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body
        const university = await createUniversityService(data)
        res.status(201).send(university)
    }catch(err){
        next(err)
    }  
}

export const listUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const queryParams = req.query
        const universities = await listUniversityService(queryParams)
        res.send(universities)
    }catch(err){
        next(err)
    }
}

export const getOneUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const {id} = req.params
        const university = await getOneUniversityService(id)
        res.send(university)
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
        res.send(universityUpdated)  
    }catch(err){
        next(err)
    }
}

export const deleteUniversity = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const {id} = req.params
        await deleteUniversityService(id)
        res.status(204).send()
    }catch(err){
        next(err)
    }    
}

