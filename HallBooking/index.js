import express from 'express' ;
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const app = express()
const PORT = process.env.PORT;
//const PORT = process.env.PORT || 8001; 

const allHall = [
    {
        "room-name": "Party-hall",
        "room-id": 101,
        "seats-available": 100,
        "amenities":"air-conditioning, fans, lights",
        "price for 1-hour":2000,
        "bookingDetails":[
            {
                "customerName": "charlie puth",
                "date": "29-11-2023",
                "start-time": "12:00 PM",
                "end-time": "2:00 PM",
                "booked-status": "confirmed"
            },
            {
                "customerName": "syvia",
                "date": "1-11-2023",
                "start-time": "2:00 PM",
                "end-time": "5:00 PM",
                "booked-status": "Waiting"
            },
            {
                "customerName": "olivia",
                "date": "31-12-2023",
                "start-time": "11:00 PM",
                "end-time": "1:00 AM",
                "booked-status": "confirmed"
            }

        ]
    },
    {
        "room-name": "banquet-hall",
        "room-id": 108,
        "seats-available": 1500,
        "amenities":"air-conditioning, audio-visual effects, catering facilities",
        "price for 1-hour":5000,
        "bookingDetails":[
            {
                "customerName": "john eliot",
                "date": "1-1-2024",
                "start-time": "12:00 PM",
                "end-time": "2:00 PM",
                "booked-status": "confirmed"
            },
            {
                "customerName": "salim ali",
                "date": "17-2-2024",
                "start-time": "2:00 PM",
                "end-time": "5:00 PM",
                "booked-status": "confirmed"
            },
            {
                "customerName": "indira",
                "date": "31-2-2024",
                "start-time": "11:00 PM",
                "end-time": "1:00 AM",
                "booked-status": "confirmed"
            }

        ]
    }
  ]

const MONGO_URL = "mongodb://0.0.0.0:27017";


async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}

const client = await createConnection()
// express.json() act like an inteceptor / converting body to the json / inbuilt middleware
app.use(express.json());

app.get('/welcome',(req, res)=> {  
    res.send('welcome to party hall👋🎉🎊🥳')
    })


    app.get('/allhall', async(req, res)=> {  
        // const { product_material, product_color, product_price } = req.query;
        // console.log(req.query,product_material);
        
        // console.log(req.query,product_color);
        // let filteredProducts = products;
        //  if (product_material){
        //     // call by reference  filtered products is reference
        //     filteredProducts = products.filter((pd)=> pd.product_material == product_material)
        //  }
        //  if (product_color){
        //     // call by reference
        //     filteredProducts = products.filter((pd)=> pd.product_color == product_color)   
        //  } 
            // if (product_price){
            //     // call by reference
            //     filteredProducts = products.filter((pd)=> pd.product_price == product_price)   
            //  } 

            //  if (req.query.product_price){
            //     req.query.product_price = +req.query.product_price
                
            //  } 

        const hall = await  client.db("node").collection("hall-api").find(req.query).toArray();
        res.send(hall)
    })

app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)