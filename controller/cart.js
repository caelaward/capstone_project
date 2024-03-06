import { getCart,getSingleCart,addCart,editCart,delCart} from "../models/cartDB.js"

export default{
    getCartItems :async(req,res)=>{
        res.send( await getCart())
    }, 
    getSingleCartItem:async(req,res)=>{
        res.send(await getSingleCart(+req.params.id))
    },
    addCartItem:async(req,res)=>{
        const { carID,quantity,prodID,userID } = req.body;
        const post = await addCart(carID,quantity,prodID,userID);
        res.send(await getCart());  
    },
    updateCart:async(req,res)=>{
        
        let {quantity,prodID,userID}=req.body
        const [user]=await getSingleCart(+req.params.id)
     
        quantity ? quantity=quantity: {quantity}=user
        prodID? prodID=prodID: {prodID}=user
        userID ? userID=userID: {userID}=user
        
         await editCart(quantity,prodID,userID,+req.params.id)
       
     
        res.json(await getCart())
     
    },
    deleteCart:async(req,res)=>{
        res.send(await delCart(req.params.id)) 
    }
} 