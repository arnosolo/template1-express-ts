import express from 'express'
import cors from 'cors'
import { todoRouter } from './routes/todoRoutes'
import { MyException } from './exceptions/MyException'
import { errorHandler } from './middlewares/errorHandler'
import { printIncoming } from './middlewares/printIncoming'

const MAX_REQUEST_BODY_SIZE = '12MB'

const app = express()

app.use(printIncoming)
app.use(cors())
app.use(express.json({ limit: MAX_REQUEST_BODY_SIZE }))

app.get('/', (req, res) => {
  res.status(200).send(`Hello from a node server, ${new Date().toISOString()}`)
})

app.use('/api/v1/todo', todoRouter)

app.get('*', (req, res, next) => {
  try {
    throw new MyException('ROUTE_NO_FOUND', `Can't find ${req.url}`)
  } catch (error) {
    next(error)
  }
})

app.use(errorHandler)

export { app }
