// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/users', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: '1',
      firstName: 'lee',
      lastName: 'joo'
    })
  })
]
