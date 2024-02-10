export const myExceptionTypes = [
  'INVALID_INPUT_PARAMS',
  'ROUTE_NO_FOUND',
  'UNKNOWN_ISSUE'
] as const

export type MyExceptionType = typeof myExceptionTypes[number]

const issueTypeToStatusCode: Record<MyExceptionType, number> = {
  INVALID_INPUT_PARAMS: 400,
  ROUTE_NO_FOUND: 404,
  UNKNOWN_ISSUE: 500
}

export class MyException extends Error {
  issue: MyExceptionType
  status: number

  constructor (issue: MyExceptionType, message: string = issue) {
    super(message)
    this.issue = issue
    this.status = issueTypeToStatusCode[issue]
  }
}
