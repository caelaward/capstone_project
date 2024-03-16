import express from 'express'
import controller from '../controller/cart.js'


const router = express.Router()

router
    .route('/')
        .get(controller.getCartItems)
        .post(controller.addCartItem)
        
router
    .route('/:id')
    .get(controller.getSingleCartItem)
    
// router  
//     .route('/:prodID/:userID')
//         .post(controller.addCartItem)

export default router
