import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Blank from '../components/pages/Blank'

describe('Blank Component', () => {
  it('renders without crashing', () => {
    render(<Blank />)
  })

  it('displays the correct text', () => {
    render(<Blank />)
    expect(screen.getByText('Blank')).toBeInTheDocument()
  })

  it('renders a div element', () => {
    render(<Blank />)
    const element = screen.getByText('Blank')
    expect(element.tagName).toBe('DIV')
  })
})