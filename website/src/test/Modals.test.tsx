import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Modals from '../components/pages/Modals'


vi.mock('react-icons/ci', () => ({
  CiStar: () => <span data-testid="star-icon" />,
}))


vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}))


vi.mock('@/components/ui/dialog', () => ({
  Dialog: ({ children }: any) => <div>{children}</div>,
  DialogTrigger: ({ children }: any) => <div>{children}</div>,
  DialogContent: ({ children }: any) => (
    <div data-testid="dialog-content">{children}</div>
  ),
  DialogHeader: ({ children }: any) => <div>{children}</div>,
  DialogTitle: ({ children }: any) => <h2>{children}</h2>,
  DialogDescription: ({ children }: any) => <p>{children}</p>,
}))

describe('DashboardModals Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main heading', () => {
    render(<DashboardModals />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('renders star banner section', () => {
    render(<DashboardModals />)

    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(
      screen.getByText('Star this project on GitHub')
    ).toBeInTheDocument()
    expect(screen.getByText('View More')).toBeInTheDocument()
  })

  it('renders description content', () => {
    render(<DashboardModals />)

    expect(
      screen.getByText(/This is possibly the most accessible/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/focus trap/i)
    ).toBeInTheDocument()
  })

  it('renders open modal button', () => {
    render(<DashboardModals />)

    expect(
      screen.getByRole('button', { name: 'Open Modal' })
    ).toBeInTheDocument()
  })

  it('renders modal content (mocked)', () => {
    render(<DashboardModals />)

    expect(screen.getByTestId('dialog-content')).toBeInTheDocument()

    expect(
      screen.getByText('Accessible Modal')
    ).toBeInTheDocument()

    expect(
      screen.getByText(/focus trapping/i)
    ).toBeInTheDocument()
  })

  it('renders code snippet text', () => {
    render(<DashboardModals />)

    expect(
      screen.getByText('assets/js/focus-trap.js')
    ).toBeInTheDocument()
  })
})