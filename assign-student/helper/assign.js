
import { client } from "../index.js";

export async function postAssignedStu(students) {
  return await client.db("assign").collection("students").insertMany(students);
}

  export async function postAssignedMen(mentors) {
    return await client.db("assign").collection("mentors").insertMany(mentors);
  }

  export async function assigned(assign) {
    return await client
      .db("assign")
      .collection("assigned")
      .insertMany(assign);
  }
   
  export async function getAllStumen() {
    return await client.db("assign").collection("assigned").find({}).toArray();
  }

  export async function getAssigned(id) {
    return await client.db("assign").collection("assigned").findOneAndDelete({ id: id });
  }

  export async function postAssigned(stuArray, id, ment) {
    return await client.db("assign").collection("assigned").insertOne({
      students: stuArray,
      id: id,
      mentors: ment.value
    });
  }
  export async function setStudents(students, i) {
    return await client.db("assign").collection("students").findOneAndDelete({ "id": students[i] });
  }
  export async function getMentors(mentor) {
    return await client.db("assign").collection("mentors").findOneAndDelete({ "id": mentor });
  }