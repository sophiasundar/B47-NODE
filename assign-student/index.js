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
    res.send('welcome to assigning the students to the mentor 🧑‍🏫 🏫 🧑‍🎓')
  })

  app.get('/students', async(req, res)=> {  
    const { studentsName } = req.query;
    console.log(req.query,studentsName);

    if (req.query.studentsName){
        req.query.studentsName = +req.query.studentsName;
       } 

        const student = await  client.db("assign").collection("mentorStudent").find(req.query).toArray();
        res.send(student)
        })
    
        app.get('/products/:id', async(req, res)=> {  
            const { id } = req.params;
            console.log(req.params, "ID=", id);
            // db.products.findOne({id:"1"})
            // const product = products.find((pd)=> pd.id == id)[0];
            const product = await client
              .db("items")
              .collection("products")
              .findOne({ id: id });
           product
             ? res.send(product)
             : res.status(404).send({ message: "No Products Found" });
        }); 

  app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)