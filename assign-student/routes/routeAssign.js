import express from "express";
import { getAllStumen, assigned,  postAssignedStu, postAssignedMen, getMentors, setStudents, postAssigned, getAssigned } from "../helper/assign.js"
const router = express.Router();


//    get assigned details
        router.get('/', async(req, res)=> { 
        const stumen = await  getAllStumen(req);
                    res.send(stumen)
                    })

                    router.post('/', async(req, res)=> { 
                      const assign = req.body;
                      console.log(assign)
                      const result = await assigned(assign);
                        res.send(result)
                                  })

                    router.post("/",async(req, res)=> {
                        const stumen =req.body;
                        const id=stumen.id;
                        const mentors=stumen.mentors;
                        const students=stumen.students;

                        const ment = await getMentors(mentors)
                        let stuArray=[];
                          for(let i=0;i<students.length;i++){

                            const stumen=await setStudents(students, i);
                            stuArray.push(stumen.value);

                            if(students.length==i+1){
                              const result = await postAssigned(stuArray, id, ment)
                              res.send(result);
                            }
                            }
                    });
          


                    router.delete("/:id",async(req, res)=> {
                        const { id } =req.params.id ;
                        const  assign = await getAssigned(id)
                        let mentors= assign.value.mentors;
                        let students=assign.value.students;
                      
                        const stud= await postAssignedStu(students);
                        const ment = await postAssignedMen(mentors);
                        

                        res.send({
                          message:"data removed successfully."
                        });
                      });
                      
                    
                    






export const stumenRouter = router;