import express from 'express'
import controller from '../controller/cart.js'


const router = express.Router()

router
    .route('/')
        .get(controller.getCartItems)
        .get(controller.addCartItem)
router
    .route('/:id')
    .get(controller.getSingleCartItem)
    

export default router
