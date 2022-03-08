import app from "./app";
import connectDatabase from "./database";

connectDatabase()

app.listen(3000, () => {
    console.log("Running in localhost:3000")
})

