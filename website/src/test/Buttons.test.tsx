import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '../components/pages/Button'


vi.mock('react-icons/ci', () => ({
  CiStar: () => <span data-testid="star-icon" />,
}))

describe('Button Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all main sections', () => {
    render(<Button />)

    expect(screen.getByText('Buttons')).toBeInTheDocument()
    expect(screen.getByText('Sizes')).toBeInTheDocument()
    expect(screen.getByText('Icons')).toBeInTheDocument()
  })

  it('renders star banner correctly', () => {
    render(<Button />)

    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(screen.getByText('Star this project on GitHub')).toBeInTheDocument()
    expect(screen.getByText('View More')).toBeInTheDocument()
  })

  it('renders all size buttons', () => {
    render(<Button />)

    const labels = [
      'Larger button',
      'Large button',
      'Regular',
      'Disabled',
      'Small',
    ]

    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('renders icon buttons', () => {
    render(<Button />)

    expect(screen.getByText('Icon Right 🤍')).toBeInTheDocument()
    expect(screen.getByText('🤍 Icon Left')).toBeInTheDocument()
    expect(screen.getByText('🤍')).toBeInTheDocument()
    expect(screen.getByText('🖉')).toBeInTheDocument()
  })

  it('disabled button is actually disabled', () => {
    render(<Button />)

    const disabledBtn = screen.getByRole('button', { name: 'Disabled' })
    expect(disabledBtn).toBeDisabled()
  })

  it('applies correct size classes', () => {
    render(<Button />)

    expect(screen.getByText('Larger button')).toHaveClass('px-8')
    expect(screen.getByText('Large button')).toHaveClass('px-6')
    expect(screen.getByText('Regular')).toHaveClass('px-4')
    expect(screen.getByText('Small')).toHaveClass('px-3')
  })

  it('renders correct number of buttons', () => {
    render(<Button />)

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(9)
  })
})