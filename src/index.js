import { app } from "./app.js";
import  connectDB  from "./db/db.js";
import dotenv from "dotenv"

dotenv.config({})

//database connection
connectDB()

app.listen(process.env.PORT || 8000,()=>{
    console.log("Server is running at port :",process.env.PORT)
})
