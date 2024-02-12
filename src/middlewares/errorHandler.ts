import { type NextFunction, type Request, type Response } from 'express'
import { MyException } from '../exceptions/MyException'

export function errorHandler (error: unknown, req: Request, res: Response, next: NextFunction): void {
  const err = (error instanceof MyException)
    ? error
    : new MyException('UNKNOWN_ISSUE')

  const resBody = {
    status: err.status,
    issue: err.issue,
    message: err.message
  }

  const log = {
    req: {
      method: req.method,
      url: req.url,
      ip: req.ip,
      // headers: req.headers,
      body: req.body
    },
    res: {
      body: resBody
    }
  }
  console.log(`[errorHandler] ${JSON.stringify(log, null, 2)}`)

  res.status(err.status).json(resBody)
}
