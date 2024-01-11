// students

import express from "express";
import { getAllstudents, getstudentsById, deletestudentsById, addstudents, updatestudents } from "../helper/helperStudent";
const router = express.Router();


//  while we are using the router in express we have to give 
// endpoint as http://localhost:8000/students/students because,
// we use like this app.use("/students", studentsRouter);
//  no need to repeat it (/students/students) , just give /:id like that is enough......


//  REST api the endpoints


        router.get('/', async(req, res)=> {  
           const student = await  getAllstudents(req);
            res.send(student)
        })

            router.get('/:id', async(req, res)=> {  
                const { id } = req.params;
                const student = await getstudentsById(id);
               student
                 ? res.send(student)
                 : res.status(404).send({ message: "No students Found" });
            }); 

            // delete the student by id
            router.delete('/:id', async(req, res)=> {  
                const { id } = req.params;
                console.log(req.params, "ID=", id);
               
                const student = await deletestudentsById(id);
                  res.send(student)
                 
            }); 

            // add students   for add students need to include the middleware called express.json()
             router.post('/', async(req, res)=> {  
                const newstudent = req.body;
                console.log(newstudent)
                const result = await addstudents(newstudent);
                  res.send(result)
            }); 

            // update students
            router.put('/:id', async(req, res)=> {
              const { id } = req.params;
                const updatestudent = req.body;
                console.log(updatestudent)
                const result = await updatestudents(id,updatestudent);
                  res.send(result)
                });



   export const studentsRouter = router;