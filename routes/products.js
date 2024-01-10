import express from "express";
const router = express.Router();



//  REST api the endpoints


        router.get('/products', async(req, res)=> {  
            const { product_material, product_color, product_price } = req.query;
            console.log(req.query,product_material);
           
                 if (req.query.product_price){
                    req.query.product_price = +req.query.product_price
                    
                 } 

            const product = await  getAllProducts(req);
            res.send(product)
        })

            router.get('/products/:id', async(req, res)=> {  
                const { id } = req.params;
                console.log(req.params, "ID=", id);
                // db.products.findOne({id:"1"})
                // const product = products.find((pd)=> pd.id == id)[0];
                const product = await getProductsById(id);
               product
                 ? res.send(product)
                 : res.status(404).send({ message: "No Products Found" });
            }); 

            // delete the product by id
            router.delete('/products/:id', async(req, res)=> {  
                const { id } = req.params;
                console.log(req.params, "ID=", id);
               
                const product = await deleteProductsById(id);
                  res.send(product)
                 
            }); 

            // add products   for add products need to include the middleware called express.json()
             router.post('/products', async(req, res)=> {  
                const newProduct = req.body;
                console.log(newProduct)
                const result = await addProducts(newProduct);
                  res.send(result)
                 // client
                //   .db("items")
                //   .collection("products")
                //   .insertMany(newProduct)   new fuction
            }); 
// express have inbuilt router so no need to install any router packages

   export const productsRouter = router;