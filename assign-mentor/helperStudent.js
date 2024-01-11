import { client } from "./index.js";

//  for organizing the code we are doing this below
export async function getAllStudents(req) {
    return await client.db("assign").collection("mentorStudent").find(req.query).toArray();
}
export async function getStudentsById(id) {
    return await client
        .db("assign")
        .collection("mentorStudent")
        .findOne({ id: id });
}
export async function deleteStudentsById(id) {
    return await client
        .db("assign")
        .collection("mentorStudent")
        .deleteOne({ id: id });
}
export async function addStudents(newstudent) {
    return await client
        .db("assign")
        .collection("mentorStudent")
        .insertMany(newstudent);
}
export async function updateStudents(id,updatestudent) {
    return await client
        .db("assign")
        .collection("mentorStudent")
        .updateOne({id: id}, {$set:updatestudent});
}
