import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/error";
import { transformUppercase, transformUppercaseFirtsLetterWord } from "../utils/transform";
import University from "../models/university";

export const  validateCreateUniversity = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    
    const keysRequired = ["alpha_two_code", "name", "country", "domains", "web_pages"];
    const keysMissing = [];

    for(let i = 0; i < keysRequired.length; i++){
        if(Object.keys(data).includes(keysRequired[i]) == false){
            keysMissing.push(keysRequired[i])
        }
    }

    if(keysMissing.length > 0 ){
        next(new ErrorHandler(400, "the keys missing: " + keysMissing.join(", ")))
    }

    const stringKeys = ["alpha_two_code", "name", "country", "state-province"]

    if(Object.keys(data).includes("state-province") == false){
        stringKeys.pop()
    }

    const arrKeys = ["domains", "web_pages"]
    const arrKeysMissing = []
    const stringKeysMissing = []



    for(let i = 0; i < stringKeys.length; i++){
        if(typeof data[stringKeys[i]] != 'string'){
            stringKeysMissing.push(stringKeys[i])
        }
    }

    if(stringKeysMissing.length > 0 ){
        next(new ErrorHandler(400, "the keys: " + stringKeysMissing.join(", ") + " must be strings" ))
    }

    for(let i = 0; i < arrKeys.length; i++){
        if(typeof data[arrKeys[i]] != 'object'){
            arrKeysMissing.push(arrKeys[i])
        }
    }

    if(arrKeysMissing.length > 0 ){
        next(new ErrorHandler(400, "the keys: " + arrKeysMissing.join(", ") + " must be arrays" ))
    }

    if(data["alpha_two_code"].length != 2) {
        next(new ErrorHandler(400, "The state abbreviation is exactly 2 characters long"))
    }

    if(data["state-province"] == undefined){
        req.body["state-province"] = null
    }

    req.body.name = transformUppercaseFirtsLetterWord(data.name)
    req.body.country = transformUppercaseFirtsLetterWord(data.country)
    req.body.alpha_two_code = transformUppercase(data.alpha_two_code)

    next()

}

export const  validateUpdateUniversity = async (req: Request, res: Response, next: NextFunction) => {
    const availableKeys = ["domains", "web_pages", "name"];
    const data = req.body

    for(let i = 0; i < Object.keys(data).length; i++){
        if(availableKeys.includes(availableKeys[i]) == false){
            next(new ErrorHandler(400, 'It is only allowed to change the fields ' + availableKeys.join(", ")))
        }
    }

    if(Object.keys(data).includes("name") == true){
        const id =  req.params.id
        const university = await University.findOne({_id: id})
   
        const universityExists = await University.findOne({name: data.name, country: university.country, alpha_two_code: university.alpha_two_code})
        if(universityExists){
            next(new ErrorHandler(409, "This university already exists"))
        }
    }

    if(Object.keys(data).includes("web_pages") == true){
        if(Array.isArray(data["web_pages"])== false){
            next (new ErrorHandler(400, "an array must be provided for the web_pages field"))
        }
    }

    if(Object.keys(data).includes("domains") == true){

        if(Array.isArray(data["domains"]) == false){
            console.log("sdsd")
            next(new ErrorHandler(400, "an array must be provided for the domains field"))
        }
    }

    next()
}

