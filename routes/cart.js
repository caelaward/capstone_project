import express from 'express'
import controller from '../controller/cart.js'


const router = express.Router()

router
    .route('/')
    .post(controller.addCartItem)
    
    router
    .route('/:id')
    .get(controller.getCartItems)
   


export default router
