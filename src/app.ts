import express, {Request, Response, NextFunction} from "express"
import { handleError } from "./utils/error"

const app = express()

app.use(express.json())

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    handleError(err, res)
})

export default app