import  express  from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";


dotenv.config();
const app = express()
const PORT = process.env.PORT

const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}
export const client = await createConnection()

app.use(express.json());
   
app.get('/',(req, res)=> {  
    res.send('Hello World hi👋🌏')
    })

app.use("/products", productsRouter);
//   productsRouter is a name
app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)