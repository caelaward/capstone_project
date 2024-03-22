import { getCart,addCart,delCart,getCarts,clearUserCart} from "../models/cartDB.js"

export default{
    getCart: async(req,res)=>{
        res.send( await getCarts())
    },
    getCartItems : async(req,res)=>{
        res.send( await getCart(+req.params.id))
    },
    addCartItem:async(req,res)=>{
        try {
            
            const {users}=req.query
        
    
            // Call the addCart function to add the item to the cart
            await addCart( +req.params.id, users);
    
            // res.send(updatedCart);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            res.status(500).send('Error adding item to cart');
        }
          
    },
   
   
    deleteCart: async (req,res)=> {
        await delCart(+req.params.id);
        res.send(await getCarts())
       },

       delUserCart: async (req, res) => {
        try {
                const  id = req.params.id
                await clearUserCart(+id);
                res.send(await getCarts());
              
            // res.json({message: 'Cart cleared successfully'});
        } catch (error) {
            console.error('Error in clearing the users cart:', error);
            res.status(500).json({ error: 'Unable to clear the users cart'});
        }
    }
} 

