import  express  from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { studentsRouter } from "./routes/students.js";
// import { teachersRouter } from "./routes/teachers.js";

dotenv.config();
const app = express()
const PORT = process.env.PORT

// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = "mongodb://0.0.0.0:27017";

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}
export const client = await createConnection()

app.use(express.json());
   
app.get('/',(req, res)=> {  
    res.send('welcome to assigning the students to the mentor 🧑‍🏫 🏫 🧑‍🎓')
    })


    app.use("/students", studentsRouter);

    // app.use("/teachers", teachersRouter);

app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)