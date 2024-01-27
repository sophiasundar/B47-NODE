const express = require("express")
const fs = require("fs");
const app = express();
const PORT = 8000;

  

app.get("/", function (req, res) {
    res.send("Welcome🙋‍♀️");
  });
  
  const date_Time=()=>{
          const dateObj = new Date();
          // current date
          // adjust 0 before single digit date
          const date = (`0 ${dateObj.getDate()}`).slice(-2);
           
          // current month
          const month = (`0 ${dateObj.getMonth() + 1}`).slice(-2);
           
          // current year
          const year = dateObj.getFullYear();
           
          // current hours
          const hours = dateObj.getHours();
           
          // current minutes
          const minutes = dateObj.getMinutes();
           
          // current seconds
          const seconds = dateObj.getSeconds();
           
         // prints date & time in YYYY-MM-DD HH:MM:SS format
         console.log(`year:${year}-month:${month}-date:${date}  IST:${hours}:${minutes}:${seconds}`);
  
          return `The Current timestamp is (${year}-${month}-${date}),Indian Standard Time is (${hours}:${minutes}:${seconds})`;
  }
  


  //! to crate time stamp file inside folder.
  app.get("/create", function (req, res) {
    res.send({message:"File is created successfully"});
    const date=new Date()
    date_Time()
    fs.writeFile(`./timeStamp/${date_Time()}.txt`,`${date}`,(err)=>{
        console.log(err);
      })
  });
  
  //! To delete time stamp file inside folder.
  app.delete("/delete",function(req, res){
      fs.readdir('./timeStamp',(err,files)=>{
           res.send({message: `Deleted ${files.length} files from the Directory.`})
              if(err) throw err;
              for(const file of files){
                  fs.unlinkSync('./timeStamp/'+file)
              }
            })
        })
  
  
  //! To Retrive all the text file in the particular folder.
  app.get("/retrive",function(req, res){
  
      fs.readdir('./timeStamp', async(err,files)=>{
          
              let array=[]
              for(let file of files){
                  fs.readFile(`./timeStamp/${file}`,"utf-8",(err,data)=>{
                      if(err){
                          console.log(err)
                      }else{
                          array.push({[file]:data})
                          if(array.length ==files.length) 
                          res.send(array)
                      }
                  })
              }
        })
  })











app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)