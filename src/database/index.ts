import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDatabase = () => {
    mongoose.connect(`mongodb://${process.env.HOST}/${process.env.DATABASE}`).then(() => {
        console.log('Connect Database!')
    }).catch((err: any) => console.log(err))
}

export default connectDatabase;