import { getCart,addCart,delCart} from "../models/cartDB.js"

export default{
    getCartItems : async(req,res)=>{
        res.send( await getCart(+req.params.id))
    },
    addCartItem:async(req,res)=>{
        try {
            const { quantity, prodID, userID } = req.body;
            const {users}=req.query
    
            // Call the addCart function to add the item to the cart
            await addCart(quantity, prodID, users);
    
            // Retrieve the updated cart details after adding the item
            const updatedCart = await getCart(userID);
    
            res.send(updatedCart);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            res.status(500).send('Error adding item to cart');
        }
        // const {quantity,prodID,userID } = req.body;
        // const post = await addCart(quantity,prodID,userID);
        // res.send(await getCart());  
    },
    deleteCart:async(req,res)=>{
        res.send(await delCart(req.params.id)) 
    }
} 