// const express = require('express')
// const { MongoClient } = require('mongodb');
import  express  from "express";
import { MongoClient } from "mongodb";
const app = express()
const PORT = 8000;

const products = [
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
]

// Mongodb Connection 
const MONGO_URL = "mongodb://localhost";

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    return client; 
}

// / is the endpoint
    app.get('/',(req, res)=> {  
    res.send('Hello World hi👋🌏')
    })

        app.get('/products', (req, res)=> {  
            const { product_material, product_color } = req.query;
            console.log(req.query,product_material);
            // console.log(req.query,product_color);
            let filteredProducts = products;
             if (product_material){
                // call by reference  filtered products is reference
                filteredProducts = products.filter((pd)=> pd.product_material == product_material)
             }
             if (product_color){
                // call by reference
                filteredProducts = products.filter((pd)=> pd.product_color == product_color)   
             } 

            res.send(filteredProducts)
        })

            app.get('/products/:id',(req, res)=> {  
                const { id } = req.params;
                console.log(req.params, "ID=", id);
                const product = products.filter((pd)=> pd.id == id)[0];
                res.send(product)
            })
  
app.listen(PORT, ()=> 
console.log("Server started on the PORT", PORT)
)