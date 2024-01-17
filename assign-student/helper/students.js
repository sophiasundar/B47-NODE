//   students
  
import { client } from "../index.js";

export async function getAllStudents(req) {
    return await client.db("assign").collection("students").find(req.query).toArray();
  }
  
export  async function getStudentsById(id) {
    return await client
      .db("assign")
      .collection("students")
      .findOne({ id: id });
  }
  
export async function addStudents(newStudent) {
    return await client
      .db("assign")
      .collection("students")
      .insertMany(newStudent);
  }
  
export async function deleteStudentsById(id) {
    return await client
      .db("assign")
      .collection("students")
      .deleteOne({ id: id });
  }

export async function updateStudents(id, updateStudent) {
    return await client
      .db("assign")
      .collection("students")
      .updateOne({id : id}, { $set: updateStudent });
  }
  
  