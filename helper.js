import { client } from "./index.js";

//  for oraganizing the code we are doing this below
export async function getAllProducts(req) {
    return await client.db("items").collection("products").find(req.query).toArray();
}
export async function getProductsById(id) {
    return await client
        .db("items")
        .collection("products")
        .findOne({ id: id });
}
export async function deleteProductsById(id) {
    return await client
        .db("items")
        .collection("products")
        .deleteOne({ id: id });
}
export async function addProducts(newProduct) {
    return await client
        .db("items")
        .collection("products")
        .insertMany(newProduct);
}
