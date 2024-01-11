//  for oraganizing the code we are doing this below
export async function getAllstudents(req) {
    return await client.db("items").collection("students").find(req.query).toArray();
}
export async function getstudentsById(id) {
    return await client
        .db("items")
        .collection("students")
        .findOne({ id: id });
}
export async function deletestudentsById(id) {
    return await client
        .db("items")
        .collection("students")
        .deleteOne({ id: id });
}
export async function addstudents(newstudent) {
    return await client
        .db("items")
        .collection("students")
        .insertMany(newstudent);
}
export async function updatestudents(id,updatestudent) {
    return await client
        .db("items")
        .collection("students")
        .updateOne({id: id}, {$set:updatestudent});
}
