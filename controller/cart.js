import { getCart} from "../models/cartDB.js"

export default{
    getCartItems :async(req,res)=>{
        res.send( await getCart())
    }, 
}