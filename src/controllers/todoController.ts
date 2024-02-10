import type { NextFunction, Request, Response } from 'express'
import type { TodoModel } from '../models/TodoModel.js'
import { MyException } from '../exceptions/MyException.js'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos: TodoModel[] = [
      { id: '1', title: 'Learn Swift' }
    ]
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

const createOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title } = req.body

    if (!title) {
      throw new MyException('INVALID_INPUT_PARAMS', 'title is empty')
    }

    const todo: TodoModel = {
      id: `${Date.now()}`,
      title
    }
    res.status(200).json(todo)
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
  createOne
}
