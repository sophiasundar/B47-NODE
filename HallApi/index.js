import express from 'express' ;
import * as dotenv from "dotenv";

const app = express()
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;

const allHall = [
    {
        "roomName": "Party-hall",
        "roomId": 101,
        "seatsAvailable": 100,
        "amenities":"air-conditioning, fans, lights",
        "priceFor1Hour":2000,
        "bookingDetails":[
            {
                "customerName": "charlie puth",
                "date": "29-11-2023",
                "startTime": "12:00 PM",
                "endTime": "2:00 PM",
                "bookedStatus": "confirmed",
                "bookingId": "08",
                "bookingDate": "29-05-2023"
            },
            {
                "customerName": "syvia",
                "date": "1-11-2023",
                "startTime": "2:00 PM",
                "endTime": "5:00 PM",
                "bookedStatus": "Waiting",
                "bookingId": "15",
                "bookingDate": "17-09-2023"
            },
            {
                "customerName": "olivia",
                "date": "31-12-2023",
                "startTime": "11:00 PM",
                "endTime": "1:00 AM",
                "bookedStatus": "confirmed",
                "bookingId": "28",
                "bookingDate": "14-06-2023"
            }

        ]
    },
    {
        "roomName": "banquet-hall",
        "roomId": 108,
        "seatsAvailable": 1500,
        "amenities":"air-conditioning, audio-visual effects, catering facilities",
        "priceFor1Hour":5000,
        "bookingDetails":[
            {
                "customerName": "john eliot",
                "date": "1-1-2024",
                "startTime": "12:00 PM",
                "endTime": "2:00 PM",
                "bookedStatus": "confirmed",
                "bookingId": "29",
                "bookingDate": "12-10-2023"
            },
            {
                "customerName": "salim ali",
                "date": "17-2-2024",
                "startTime": "2:00 PM",
                "endTime": "5:00 PM",
                "bookedStatus": "confirmed",
                "bookingId": "100",
                "bookingDate": "17-12-2023"
            },
            {
                "customerName": "indira",
                "date": "31-2-2024",
                "startTime": "11:00 PM",
                "endTime": "1:00 AM",
                "bookedStatus": "confirmed",
                "bookingId": "203",
                "bookingDate": "26-10-2023"
            }

        ]
    }
  ]


             // for home page
    app.get('/welcome',(req, res)=> {  
        res.send('welcome to party hall👋🎉🎊🥳')
        })

app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)