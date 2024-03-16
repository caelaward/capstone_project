import { getCart,getSingleCart,addCart,delCart} from "../models/cartDB.js"

export default{
    getCartItems :async(req,res)=>{
        res.send( await getCart())
    }, 
    getSingleCartItem:async(req,res)=>{
        res.send(await getSingleCart(+req.params.id))
    },
    addCartItem:async(req,res)=>{
        const { cartID,quantity,prodID,userID } = req.body;
        const post = await addCart(cartID,quantity,prodID,userID);
        res.send(await getCart());  
    },  
    deleteCart:async(req,res)=>{
        res.send(await delCart(req.params.id)) 
    }
} 