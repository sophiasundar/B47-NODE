const express = require("express")
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 8000;
  
  const dirPath = path.join(__dirname, "currentTimeStamp")
  
  //  ---------- note use this endpoint http://localhost:8000/time&date  --------------
     
  app.get("/time&date",(req, res) => {

          const dataObj = new Date();

          // getting current date
          const date = (`0 ${dataObj.getDate()}`).slice(-2);
      
          // getting current month
          const month = (`0 ${dataObj.getMonth()+1}`).slice(-2);
      
          // getting current year
            const year = dataObj.getFullYear();

          // getting current hours
            const hours = dataObj.getHours();

          //getting current minutes
            const minutes = dataObj.getMinutes();
            
          //getting current seconds
            const seconds = dataObj.getSeconds();
            
          
            
          // prints date & time in YYYY-MM-DD HH:MM:SS format
            console.log(`year:${year}-month:${month}-date:${date}  IST:${hours}:${minutes}:${seconds}`);
            


            const time = `The Current timestamp is (${year}-${month}-${date}),Indian Standard Time is (${hours}:${minutes}:${seconds})`;

        fs.writeFile(`${dirPath}/22-12-2023.txt`, time,(err)=>{
          if(err){
            console.log(err)
          }else{
            console.log(`completed writing 22-12-2023.txt`);
          }
          });
          res.send(time)
    })
  app.listen(PORT, ()=> 
  console.log("Server started on the PORT", PORT)
  )