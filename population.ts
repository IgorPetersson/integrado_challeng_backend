import axios from "axios"

import mongoose from "mongoose"
import University from "./src/models/university"

import dotenv from "dotenv"

dotenv.config()

const population = async () => {

        mongoose.connect(`mongodb://localhost/${process.env.DATABASE}`)
        const countrys = [
            "argentina",
            "brazil",
            "chile",
            "colombia",
            "paraguai",
            "peru",
            "suriname",
            "uruguay"
        ]
    
        const api = axios.create(
            {
                baseURL: "http://universities.hipolabs.com"
            }
        )
        
        const universities  = []

        for(let i = 0; i < countrys.length; i++){
            const universitiesCountry = await api.get(`/search?country=${countrys[i]}`)
            universities.push(universitiesCountry.data)
        }

        for(let i = 0; i < universities.length; i++){
            for(let j = 0; j < universities[i].length; j++){
                const university = await University.findOne({name: universities[i][j].name, alpha_two_code: universities[i][j].alpha_two_code, country: universities[i][j].country})
                
                if(!university){
                    await University.create(universities[i][j])
                }
            }
        }

        mongoose.disconnect()        
        
}  
    
population()