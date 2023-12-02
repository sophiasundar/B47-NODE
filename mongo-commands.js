// show dbs => list all dbs 
// use products => to create & switched to db products
// db => current db 


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


db.products.insertMany(
    [
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
);

       db.products.find({}).pretty();

//count
       db.products.find({}).count();

//Types of projections:  for particular rows and column of 100 rows and column
    
   // inclusion = 1
   // showing the product price and product color

        db.products.find({},{product_price: 1,product_color:1}).pretty();


   // exclusion = 0
   // exclusion means leaving the product price and product color
    
       db.products.find({},{product_price: 0,product_color:0}).pretty();


    // ************* ( cannot use both inclusion = 1 and exclusion = 0  ) ***********************

   // if we want exclude only id use this command
    
        db.products.find({},{_id:0, product_price: 1,product_color:1}).pretty();
      
    // ************** (mongodb is reading or Find the document fast than inserting) *****************
    
    // sorting
        //    ascending = 1
         db.products.find({}).sort({product_price: 1}).pretty();


        //    descending = -1
        db.products.find({}).sort({product_price: -1}).pretty();

        // in sorting not only number are sorted but also the name in alphabetical order
        db.products.find({}).sort({product_name: 1}).pretty();


        // highly priced product 
        db.products.find({}).sort({product_price: -1}).limit(3).pretty();

        // skip or ignore first 3
        db.products.find({}).sort({product_price: 1}).skip(3).pretty();
 
    // Question
        // rating < 8.8
        // rating >= 8
        // rating > 8 and exclude _id, include name,summary
        // rating >= 8.8 and exclude _id, include name,rating, and sort rating in descing order

    // rating < 8.8
    db.movies.find({
        rating: {$lt:8.8}
    }).pretty();
    
    //  // rating >= 8
    db.movies.find({
        rating: {$gte:8}
    }).pretty();

    //rating > 8 and exclude _id, include name,summary
    //  rating is greater than 8 and name and summary is asked to included, so
    //    rating is also included rating is 1
    db.movies.find({
        rating: {$gt:8}
    },{_id:0,name:1,rating:1,summary:1}).pretty();

    // rating >= 8.8 and exclude _id, include name,rating, and sort rating in descing order
    db.movies.find({
        rating: {$gte:8.8}
    },{_id:0,name:1,rating:1}).sort({rating: -1}).pretty();

    // aggregate

    db.orders.insertMany([
        {_id: 0,productName: "Steel Beam", status: "new", quantity: 10},
        {_id: 1,productName: "Steel Beam", status: "urgent", quantity: 20},
        {_id: 2,productName: "Steel Beam", status: "urgent", quantity: 30},
        {_id: 3,productName: "Iron Rod", status: "new", quantity: 15},
        {_id: 4,productName: "Iron Rod", status: "urgent", quantity: 50},
        {_id: 5,productName: "Iron Rod", status: "urgent", quantity: 10},
    ])

    db.orders.find({}).pretty();

    // stage 1: select sum(quantity) from orders where status = "urgent"

       db.orders.aggregate({$match:{status: "urgent"}})

    //  stage 2 -group by productName 

        