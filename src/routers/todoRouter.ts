import type express from 'express'
import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      res.status(200).json({
        message: 'hello'
      })
    } catch (error) {
      next(error)
    }
  })
  .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const { title } = req.body

      res.status(200).json({
        message: `${title}-123`
      })
    } catch (error) {
      next(error)
    }
  }
  )

const todoRouter = router
export { todoRouter }
