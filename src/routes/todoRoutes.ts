import { Router } from 'express'
import todoController from '../controllers/todoController'

const router = Router()

router
  .route('/')
  .get(todoController.getAll)
  .post(todoController.createOne)

const todoRouter = router
export { todoRouter }
