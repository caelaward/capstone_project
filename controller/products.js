import { getProducts,getSingleProduct,addProduct,delProduct} from "../models/database.js"

export default{
    getProds:async(req,res)=>{
        res.send( await getProducts())
    },
    getSingleProd:async(req,res)=>{
        res.send(await getSingleProduct(+req.params.id))
    },
    addProds:async(req,res)=>{
        const { prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3 } = req.body;
        const post = await addProduct(prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3);
        res.send(await getProducts());  
    },
    delProd:async(req,res)=>{
            res.send(await delProduct(req.params.id))
        }
    }
