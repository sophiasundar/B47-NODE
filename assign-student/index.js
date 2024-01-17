import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { studentsRouter } from "./routes/routeStudents.js";

const app = express();
const PORT = 8000;
dotenv.config();

const MONGO_URL = "mongodb://0.0.0.0:27017";

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}
export const client = await createConnection()

app.use(express.json());

// REST API endpoints 

  app.get('/welcome',(req,res)=>{
    res.send('welcome to assigning the students to the mentor webpage 🧑‍🏫 🏫 🧑‍🎓')
  })
  app.use("/students",studentsRouter);

  app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)

