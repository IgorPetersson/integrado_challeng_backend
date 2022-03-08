import University from "../models/university"
import { ErrorHandler } from "../utils/error"
import { transformTitle } from "../utils/transform"

interface ICreate{
    alpha_two_code: string,
    name: string,
    country: string,
    "state-province"?: string,
    domains: string[],
    web_pages: string[]
}

export const createUniversityService = async (data: ICreate) => {
    
    await University.create(data)
    const university = await University.findOne(data)

    const universityShow = {
        __id: university._id,
        alpha_two_code: university.alpha_two_code,
        name: university.name,
        country: university.country,
        "state-province": university["state-province"],
        web_pages: university.web_pages,
        domains: university.domains,
    }

    return universityShow
    
}

export const listUniversityService = async (queryParams: any) => {
    
    let page: number = parseInt(queryParams.page) || 1
    const country = queryParams.country
    
    let universities = await University.find()

    if(country){
        let titleCountry = transformTitle(country)
        universities = universities.filter((university: any) => university.country == titleCountry)
    }
    
    let finish = page*20
    let start = (page*20) - 20

    if((page-1)*20 > universities.length || universities.length == 0){
        throw(new ErrorHandler(404, "page not found"))
    }

    if(page*20 > universities.length){
        finish = universities.length
    }

    const universitiesShow = []

    for(let i = start; i < finish; i++){
        
        const universityShow = {
            _id: universities[i]._id,
            alpha_two_code: universities[i].alpha_two_code,
            name: universities[i].name,
            country: universities[i].country,
        }
        
        universitiesShow.push(universityShow)
    }

    return universitiesShow;
}

export const updateUniversityService = async (id: string, data: any) => {
    await University.updateOne({_id: id}, data)
}

export const deleteUniversityService = async (id: string) => {
    await University.deleteOne({_id: id})
}

export const getOneUniversityService = async (id: string) => {
    const university = await University.findOne({_id: id})
    
    const universityShow = {
        __id: university._id,
        alpha_two_code: university.alpha_two_code,
        name: university.name,
        country: university.country,
        "state-province": university["state-province"],
        domains: university.domains,
        web_pages: university.web_pages
    }

    return universityShow

}