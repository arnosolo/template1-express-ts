import request from 'supertest'
import { app } from '../app'

describe('POST /api/v1/todo/', () => {
  describe('when input is valid', () => {
    test('response should has id and a status code 200', async () => {
      const response = await request(app).post('/api/v1/todo/').send({
        title: 'hello'
      })
      expect(response.statusCode).toBe(200)
      expect(response.body.id).toBeDefined()
    })
  })

  describe('when some inputs are missing', () => {
    test('response should has id and a status code 200', async () => {
      const bodies = [
        { title: '' },
        {}
      ]
      for (const body of bodies) {
        const response = await request(app).post('/api/v1/todo/').send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })
})
