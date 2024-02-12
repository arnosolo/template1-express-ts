import { validateEmail } from '../validateEmail'

describe('square', () => {
  test('return false for input with no @', () => {
    const text = '1234567'
    expect(validateEmail(text)).toBe(false)
  })

  test('return false for input with no dot after @', () => {
    const text = '1234567@com'
    expect(validateEmail(text)).toBe(false)
  })

  test('return true for valid email', () => {
    const text = 'abcdefg1@gamil.com'
    expect(validateEmail(text)).toBe(true)
  })
})
