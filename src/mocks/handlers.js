// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

import { getUsers } from '@/api/home/api.ts'

const { url } = getUsers()

export const handlers = [
  http.get(url, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: '1',
      firstName: 'lee',
      lastName: 'joo'
    })
  })
]
