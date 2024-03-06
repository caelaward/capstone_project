import express from 'express'
import controller from '../controller/user.js'
const router = express.Router()

router
    .route('/')
      .get(controller.getManyUsers)
      .post(controller.addUsers)

router
    .route('/:id')
      .get(controller.getUser)
      .patch(controller.updateUser)
      .delete(controller.deleteUser)
      
export default router   