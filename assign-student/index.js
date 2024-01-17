import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const PORT = 8000;

const MONGO_URL = "mongodb://0.0.0.0:27017";

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("Mongodb is Connected");
    return client; 
}
const client = await createConnection()

app.use(express.json());

// REST API endpoints 

  app.get('/',(req,res)=>{
    res.send('welcome to assigning the students to the mentor webpage 🧑‍🏫 🏫 🧑‍🎓')
  })

  app.get('/students', async(req, res)=> {  
    const { studentsName } = req.query;
    console.log(req.query,studentsName);

    if (req.query.studentsName){
        req.query.studentsName = +req.query.studentsName;
       } 

        const student = await  client.db("assign").collection("students").find(req.query).toArray();
        res.send(student)
        })
    
        app.get('/students/:id', async(req, res)=> {  
            const { id } = req.params;
            console.log(req.params, "ID=", id);
            const student = await client
              .db("assign")
              .collection("students")
              .findOne({ id: id });
           student
             ? res.send(student)
             : res.status(404).send({ message: "No Students Found" });
        }); 

        // delete the student by id
        app.delete('/students/:id', async(req, res)=> {  
          const { id } = req.params;
          console.log(req.params, "ID=", id);
         
          const student = await client
            .db("assign")
            .collection("students")
            .deleteOne({ id: id });
            res.send(student)
           
      }); 

      // add products   for add products need to include the middleware called express.json()
      app.post('/students', async(req, res)=> {  
        const newStudent = req.body;
        console.log(newStudent)
        const result = await client
          .db("assign")
          .collection("students")
          .insertMany(newStudent);
          res.send(result)
         
    }); 

        //  update the student
        app.put('/:id', async(req, res)=> {
          const { id } = req.params;
            const updateStudent = req.body;
            console.log(updateStudent)
            // const result = await updatestudents(id,updatestudent);
            //   res.send(result)
            const change = await client
              .db("assign")
              .collection("students")
              .insertMany(updateStudent);
              res.send(change)
            });

  app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)