export const myExceptionTypes = [
  'invalid_input_params',
  'route_no_found',
  'unknown_issue'
] as const

export type MyExceptionType = typeof myExceptionTypes[number]

const issueTypeToStatusCode: Record<MyExceptionType, number> = {
  invalid_input_params: 400,
  route_no_found: 404,
  unknown_issue: 500
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
