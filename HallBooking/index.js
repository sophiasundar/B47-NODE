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
                "booked-status": "confirmed",
                "booking-Id": "08",
                "booked-Date": "29-05-2023"
            },
            {
                "customerName": "syvia",
                "date": "1-11-2023",
                "start-time": "2:00 PM",
                "end-time": "5:00 PM",
                "booked-status": "Waiting",
                "booking-Id": "15",
                "booked-Date": "17-09-2023"
            },
            {
                "customerName": "olivia",
                "date": "31-12-2023",
                "start-time": "11:00 PM",
                "end-time": "1:00 AM",
                "booked-status": "confirmed",
                "booking-Id": "28",
                "booked-Date": "14-06-2023"
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
                "booked-status": "confirmed",
                "booking-Id": "29",
                "booked-Date": "12-10-2023"
            },
            {
                "customerName": "salim ali",
                "date": "17-2-2024",
                "start-time": "2:00 PM",
                "end-time": "5:00 PM",
                "booked-status": "confirmed",
                "booking-Id": "100",
                "booked-Date": "17-12-2023"
            },
            {
                "customerName": "indira",
                "date": "31-2-2024",
                "start-time": "11:00 PM",
                "end-time": "1:00 AM",
                "booked-status": "confirmed",
                "booking-Id": "203",
                "booked-Date": "26-10-2023"
            }

        ]
    }
  ]

// const MONGO_URL = "mongodb://0.0.0.0:27017";
   const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}

const client = await createConnection()
// express.json() act like an inteceptor / converting body to the json / inbuilt middleware
app.use(express.json());

    // for home page
    app.get('/welcome',(req, res)=> {  
        res.send('welcome to party hall👋🎉🎊🥳')
        })


        // 1. Creating a Room with: # Number of seats available, 
            // # Amenities in Room # Price for 1 Hour
            
            // add room
             app.post('/allhall', async(req, res)=> {  
                const addHall = req.body;
                console.log(addHall)
                const result = await client
                .db("node")
                .collection("hall-api")
                .insertMany(addHall);
                res.send(result);
                
            });

        // 2. Booking a Room with: # Customer Name, 
            // # Date, # Start Time, # End Time, # Room Id



        // 3. List all Rooms with Booked Data with: # Room Name
            // # Booked status, # Customer Name, # Date,
            //  # Start Time, # End Time, # Room Id



        // 4. List all Customer with Booked Data with: # Customer Name
            //# Room Name, # Date, # Start Time, # End Time



        // 5. List how many times a Customer has Booked the room with below details: 
            // # Customer Name # Room Name, # Date, # Start Time, # End Time
            // # Booking id # Booking date


            

            app.listen(PORT, ()=> 
             console.log("Server started on the PORT", PORT)
            )