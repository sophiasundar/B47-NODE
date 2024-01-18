 import express from "express";
 import { getAllStudents, getStudentsById, addStudents, deleteStudentsById,  updateStudents } from "../helper/students.js"
  const router = express.Router();

    //    getallstudents
        router.get('/', async(req, res)=> {  
            const { studentsName } = req.query;
            console.log(req.query,studentsName);

                if (req.query.studentsName){
                    req.query.studentsName = +req.query.studentsName;
                } 

                    const student = await  getAllStudents(req);
                    res.send(student)
                    })
    
        // get all students by id
        router.get('/:id', async(req, res)=> {  
            const { id } = req.params;
            console.log(req.params, "ID=", id);
            const student = await getStudentsById(id);
           student
             ? res.send(student)
             : res.status(404).send({ message: "No Students Found" });
          }); 

        // delete the student by id
        router.delete('/:id', async(req, res)=> {  
          const { id } = req.params;
          console.log(req.params, "ID=", id);
         
          const student = await deleteStudentsById(id);
            res.send(student)
           
          }); 

      // add students   for add students need to include the middleware called express.json()
        router.post('/', async(req, res)=> {  
        const newStudent = req.body;
        console.log(newStudent)
        const result = await addStudents(newStudent);
          res.send(result)
         
         }); 

        //  update the student
        router.put('/:id', async(req, res)=> {
          const { id } = req.params;
            const updateStudent = req.body;
            console.log(updateStudent)
            const result = await updateStudents(id, updateStudent);
              res.send(result);
            });

    export const studentsRouter = router;