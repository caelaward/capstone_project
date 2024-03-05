import express from 'express'
import controller from '../controller/products.js'
const router = express.Router()


router
    .route('/')
      .get(controller.getProds)
      .post(controller.addProds)

router
    .route('/:id')
        .get(controller.getSingleProd)
        .delete(controller.delProd)
        .patch(controller.editProd)
export default router      