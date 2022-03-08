import University from "../models/university"

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