import { getProducts,getSingleProduct,addProduct,delProduct,editProduct} from "../models/prodDB.js"

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
    },
    editProd:async(req,res)=>{
        const [item]=await getSingleProduct(+req.params.id)
     
        let {prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3 }=req.body
     
        prodName ? prodName=prodName: {prodName}=item
        quantity ? quantity=quantity: {quantity}=item
        description ? description=description: {description}=item
        category ? category=category: {category}=item
        price ? price=price: {price}=item
        prodURL ? prodURL=prodURL: {prodURL}=item
        prodURL1 ? prodURL1=prodURL1: {prodURL1}=item
        prodURL2 ? prodURL2=prodURL2: {prodURL2}=item
        prodURL3 ? prodURL3=prodURL3: {prodURL3}=item
     
        await editProduct(prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3 ,+req.params.id)
     
        res.json(await getProducts())
     
    } 

    }
