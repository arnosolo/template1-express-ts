import { type RequestHandler } from 'express'

const printIncoming: RequestHandler = (req, res, next) => {
  console.log(req.method, req.url, req.ip)
  next()
}

export { printIncoming }
