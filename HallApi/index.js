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
        "seatsAvailable": "100",
        "amenities":"air-conditioning, fans, lights",
        "priceFor1Hour":"2000",
        "bookingDetails":[
            {
                "customerName": "charlie puth",
                "date": "29-11-2023",
                "startTime": "12:00 PM",
                "endTime": "2:00 PM",
                "bookedStatus": "true",
                "bookingId": "08",
                "bookingDate": "29-05-2023"
            },
            {
                "customerName": "syvia",
                "date": "1-11-2023",
                "startTime": "2:00 PM",
                "endTime": "5:00 PM",
                "bookedStatus": "false",
                "bookingId": "15",
                "bookingDate": "17-09-2023"
            },
            {
                "customerName": "olivia",
                "date": "31-12-2023",
                "startTime": "11:00 PM",
                "endTime": "1:00 AM",
                "bookedStatus": "true",
                "bookingId": "28",
                "bookingDate": "14-06-2023"
            }

        ]
    },
    {
        "roomName": "banquet-hall",
        "roomId": 108,
        "seatsAvailable": "1500",
        "amenities":"air-conditioning, audio-visual effects, catering facilities",
        "priceFor1Hour":"5000",
        "bookingDetails":[
            {
                "customerName": "john eliot",
                "date": "1-1-2024",
                "startTime": "12:00 PM",
                "endTime": "2:00 PM",
                "bookedStatus": "true",
                "bookingId": "29",
                "bookingDate": "12-10-2023"
            },
            {
                "customerName": "salim ali",
                "date": "17-2-2024",
                "startTime": "2:00 PM",
                "endTime": "5:00 PM",
                "bookedStatus": "Pending",
                "bookingId": "100",
                "bookingDate": "17-12-2023"
            },
            {
                "customerName": "indira",
                "date": "31-2-2024",
                "startTime": "11:00 PM",
                "endTime": "1:00 AM",
                "bookedStatus": "true",
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

        // for getting allhall data 
        app.get("/allHall",(req,res)=>{
            try{
                res.send(allHall)
            }catch (error) {
                console.log(error);
            }
            
        });

        // filter hall by id
        app.get("/room/:id",(req,res)=>{
            try{
                const { id } = req.params;
                console.log(req.params, "ID=", id);
                const hall = allHall.filter((ah)=> ah.roomId == id)[0];
                res.status(200).send(hall)
            }
               catch(error)  {
                console.log(error);
                res.status(404).send( "Given roomId doesn't exist ");
              }
        })

        // 1. Creating a Room with: # Number of seats available, 
            // # Amenities in Room # Price for 1 Hour

            app.post("/createroom", (req,res)=>{
                try{
                    for(let i=0; i < allHall.length; i++){
                       if(allHall[i].roomId == req.body.roomId){
                          return res.status(404).send({error:"This room Id already exist"})
                       }
                    }  
                    // object
                    let roomCreate = {
                        roomName: req.body.roomName,
                        roomId :  req.body.roomId,
                        seatsAvailable : req.body.seatsAvailable,
                        amenities : req.body.amenities,
                        priceFor1Hour: req.body.priceFor1Hour,
                        bookingDetails :[]
                    }
                    allHall.push(roomCreate)
                    
                    res.status(200).send({message:"Room Created Successfully"})
                }catch (error) {
                    console.log(error);
                }
            })
            
            // 2. Booking a Room with: # Customer Name, 
            // # Date, # Start Time, # End Time, # Room Id
            //  while booking app should not allow booking an already booked room on 
            // the same date and time.
             
            app.post("/bookRoom", (req,res)=>{
                try{     
                  for(let i = 0; i < allHall.length; i++){
                    if (allHall[i].roomId == req.body.roomId) {
                          allHall[i].bookingDetails.forEach((book)=>{
                           if(res.body.date  <= book.date ){
                              return res.status(404).send( { error:"This hall already booked with respective date and time" } )     
                           }
                          });
                          let booking = {
                              customerName: req.body.customerName,
                              date: req.body.date,
                              startTime:  req.body.startTime,
                              endTime :  req.body.endTime,
                              bookedStatus : req.body. bookedStatus,
                              bookingId : req.body.bookingId,
                              bookingDate : req.body.bookingDate
                          }
                          
                          allHall.bookingDetails.push(booking);
                          return res.status(404).send({ error: "Invaild RoomId" });
                          }
                      }
                        res.status(200).send({message:"Hall booked Successfully"});
                    }catch(error){
                      console.log(error); 
                  }
              })



 app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)