import express from "express";
 import { getAllMentors, getMentorsById, addMentors, deleteMentorsById,  updateMentors } from "../helper/mentors.js"
  const router = express.Router();

  //    getallmentors
  router.get('/', async(req, res)=> {  
    const { mentorsName } = req.query;
    console.log(req.query,mentorsName);

        if (req.query.mentorsName){
            req.query.mentorsName = +req.query.mentorsName;
        } 

            const mentor = await  getAllMentors(req);
            res.send(mentor)
            })

// get all mentors by id
router.get('/:id', async(req, res)=> {  
    const { id } = req.params;
    console.log(req.params, "ID=", id);
    const mentor = await getMentorsById(id);
   mentor
     ? res.send(mentor)
     : res.status(404).send({ message: "No Mentors Found" });
  }); 

// delete the mentor by id
router.delete('/:id', async(req, res)=> {  
  const { id } = req.params;
  console.log(req.params, "ID=", id);
 
  const mentor = await deleteMentorsById(id);
    res.send(mentor)
   
  }); 


  // create mentor   for  create mentors need to include the middleware called express.json()
  router.post('/', async(req, res)=> {  
    const newMentor = req.body;
    console.log(newMentor)
    const result = await addMentors(newMentor);
      res.send(result)
     
     }); 

    //  update the mentor
    router.put('/:id', async(req, res)=> {
      const { id } = req.params;
        const updateMentor = req.body;
        console.log(updateMentor)
        const result = await updateMentors(id, updateMentor);
          res.send(result);
        });

export const mentorsRouter = router;