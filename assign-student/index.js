import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { studentsRouter } from "./routes/routeStudents.js";
import { mentorsRouter } from "./routes/routeMentors.js";


const app = express();
// const PORT = 8000;
console.log(process.env);
const PORT = process.env.PORT;
dotenv.config();

// const MONGO_URL = "mongodb://0.0.0.0:27017";
const MONGO_URL = process.env.MONGO_URL;

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
    res.send('welcome to the mentor-students portal 🧑‍🏫 🏫 🧑‍🎓')
  })
    
  // students collection
  app.use("/students",studentsRouter);
    
  // mentors collection
  app.use("/mentors",mentorsRouter);
    
  // assign students to the mentor collection
  // app.use("/stumen",stumenRouter);

  app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
);

