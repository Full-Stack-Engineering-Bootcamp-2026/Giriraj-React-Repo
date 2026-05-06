import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Login from '../components/pages/Login'


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

vi.mock('@/components/ui/separator', () => ({
  Separator: () => <hr />,
}))


vi.mock('react-icons/fa', () => ({
  FaGithub: () => <span data-testid="github-icon" />,
  FaTwitter: () => <span data-testid="twitter-icon" />,
}))

describe('LoginPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main heading', () => {
    render(<LoginPage />)

    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('renders input fields', () => {
    render(<LoginPage />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<LoginPage />)

    expect(
      screen.getByRole('button', { name: 'Log in' })
    ).toBeInTheDocument()
  })

  it('renders social login buttons with icons', () => {
    render(<LoginPage />)

    expect(screen.getByText('Github')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()

    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<LoginPage />)

    expect(screen.getByText('Forgot your password?')).toBeInTheDocument()
    expect(screen.getByText('Create account')).toBeInTheDocument()
  })

  it('renders separator', () => {
    render(<LoginPage />)

    const separators = screen.getAllByRole('separator')
    expect(separators.length).toBeGreaterThan(0)
  })
})