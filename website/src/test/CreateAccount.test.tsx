import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import CreateAccount from '../components/pages/CreateAccount'

// ✅ Mock router
const mockNavigate = vi.fn()
vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}))

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

vi.mock('@/components/ui/checkbox', () => ({
  Checkbox: (props: any) => <input type="checkbox" {...props} />,
}))

vi.mock('@/components/ui/separator', () => ({
  Separator: () => <hr />,
}))

// ✅ Mock icons
vi.mock('react-icons/fa', () => ({
  FaGithub: () => <span data-testid="github-icon" />,
  FaTwitter: () => <span data-testid="twitter-icon" />,
}))

describe('CreateAccount Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main heading', () => {
    render(<CreateAccount />)

    expect(screen.getByText('Create account')).toBeInTheDocument()
  })

  it('renders all input fields', () => {
    render(<CreateAccount />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument()
  })

  it('renders checkbox and policy text', () => {
    render(<CreateAccount />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(
      screen.getByText(/I agree to the privacy policy/i)
    ).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<CreateAccount />)

    expect(
      screen.getByRole('button', { name: 'Create account' })
    ).toBeInTheDocument()
  })

  it('renders social login buttons with icons', () => {
    render(<CreateAccount />)

    expect(screen.getByText('Github')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()

    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument()
  })

  it('navigates to login on click', () => {
    render(<CreateAccount />)

    const loginBtn = screen.getByText('Login')
    fireEvent.click(loginBtn)

    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })

  it('prevents form submission reload', () => {
    render(<CreateAccount />)

    const form = screen.getByRole('button', { name: 'Create account' }).closest('form')!

    const preventDefault = vi.fn()
    fireEvent.submit(form, { preventDefault })

    expect(preventDefault).toHaveBeenCalled()
  })
})