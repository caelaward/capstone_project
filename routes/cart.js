import express from 'express'
import controller from '../controller/cart.js'


const router = express.Router()

router
    .route('/')
    
    router
    .route('/:id')
    .get(controller.getCartItems)
    .post(controller.addCartItem)
   


export default router
