import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ForgotPassword from '../components/pages/ForgotPassword'

// ✅ Mock UI components
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}))

vi.mock('@/components/ui/input', () => ({
  Input: (props: any) => <input {...props} />,
}))

vi.mock('@/components/ui/label', () => ({
  Label: ({ children, ...props }: any) => (
    <label {...props}>{children}</label>
  ),
}))

vi.mock('@/components/ui/card', () => ({
  Card: ({ children }: any) => <div>{children}</div>,
}))

describe('ForgotPassword Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders heading', () => {
    render(<ForgotPassword />)

    expect(screen.getByText('Forgot password')).toBeInTheDocument()
  })

  it('renders email input field', () => {
    render(<ForgotPassword />)

    const input = screen.getByLabelText('Email')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders recover button', () => {
    render(<ForgotPassword />)

    expect(
      screen.getByRole('button', { name: 'Recover password' })
    ).toBeInTheDocument()
  })

  it('allows typing in email field', () => {
    render(<ForgotPassword />)

    const input = screen.getByLabelText('Email') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test@example.com' } })

    expect(input.value).toBe('test@example.com')
  })

  it('prevents form submission reload', () => {
    render(<ForgotPassword />)

    const form = screen
      .getByRole('button', { name: 'Recover password' })
      .closest('form')!

    const preventDefault = vi.fn()
    fireEvent.submit(form, { preventDefault })

    expect(preventDefault).toHaveBeenCalled()
  })
})