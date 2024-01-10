// const express = require('express')
// const { MongoClient } = require('mongodb');
import  express  from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { productsRouter } from "./routes/products.js";

dotenv.config();
const app = express()
const PORT = process.env.PORT;

// Mongodb Connection
// three methods for this mongodb connection
        // mongodb://localhost
        // mongodb://localhost:27017
        // mongodb://0.0.0.0:27017   protocol
// const MONGO_URL = process.env.MONGO_URL;   for mongo atlas

const MONGO_URL = "mongodb://0.0.0.0:27017";

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}
export const client = await createConnection()
// express.json() act like an inteceptor / converting body to the json / inbuilt middleware
app.use(express.json());
   
app.get('/',(req, res)=> {  
    res.send('Hello World hi👋🌏')
    })

app.use("/products", productsRouter);
//   productsRouter is a name
app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)


