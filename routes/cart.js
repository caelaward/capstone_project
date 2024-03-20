import express from 'express'
import controller from '../controller/cart.js'


const router = express.Router()

router
    .route('/')
    .get(controller.getCart)
    
    router
    .route('/:id')
    .get(controller.getCartItems)
    .post(controller.addCartItem)
    .delete(controller.deleteCart)
   


export default router
