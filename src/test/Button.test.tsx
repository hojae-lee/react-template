import { render, screen } from '@testing-library/react'

import Button from '@/common/components/Button.tsx'

describe('Button Component Test', () => {
  test('Button Component GUI Test', () => {
    render(<Button>제출</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('제출')
  })
})
