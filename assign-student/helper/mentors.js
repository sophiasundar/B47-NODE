//  mentors


import { client } from "../index.js";


        export async function getAllMentors(req) {
            return await client.db("assign").collection("mentors").find(req.query).toArray();
        }
        
        export  async function getMentorsById(id) {
            return await client
            .db("assign")
            .collection("mentors")
            .findOne({ id: id });
        }
        
        export async function addMentors(newMentor) {
            return await client
            .db("assign")
            .collection("mentors")
            .insertMany(newMentor);
        }
        
        export async function deleteMentorsById(id) {
            return await client
            .db("assign")
            .collection("mentors")
            .deleteOne({ id: id });
        }

        export async function updateMentors(id, updateMentor) {
            return await client
            .db("assign")
            .collection("mentors")
            .updateOne({id : id}, { $set: updateMentor });
        }