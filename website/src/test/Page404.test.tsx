import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Page404 from '../components/pages/Page404'


const mockNavigate = vi.fn()
vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}))


vi.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}))


vi.mock('lucide-react', () => ({
  OctagonAlert: () => <span data-testid="alert-icon" />,
  MoveLeft: () => <span data-testid="back-icon" />,
}))

describe('Page404 Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main 404 heading', () => {
    render(<Page404 />)

    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders alert icon', () => {
    render(<Page404 />)

    expect(screen.getByTestId('alert-icon')).toBeInTheDocument()
  })

  it('renders page not found message', () => {
    render(<Page404 />)

    expect(
      screen.getByText(/Page not found/i)
    ).toBeInTheDocument()
  })

  it('calls navigate(-1) when go back is clicked', () => {
    render(<Page404 />)

    const goBackBtn = screen.getByRole('button', { name: /go back/i })
    fireEvent.click(goBackBtn)

    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })

  it('renders return home button', () => {
    render(<Page404 />)

    expect(
      screen.getByRole('button', { name: /return home/i })
    ).toBeInTheDocument()
  })

  it('navigates to home on button click', () => {
    render(<Page404 />)

    const homeBtn = screen.getByRole('button', { name: /return home/i })
    fireEvent.click(homeBtn)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})