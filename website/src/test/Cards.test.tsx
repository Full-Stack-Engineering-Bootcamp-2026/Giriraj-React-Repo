import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Cards from '../components/pages/Cards'


vi.mock('react-icons/ci', () => ({
  CiStar: () => <span data-testid="star-icon" />,
}))


vi.mock('../components/CardComponent/StatCard', () => ({
  default: () => <div data-testid="stat-card">StatCard</div>,
}))

// ✅ Mock UI Card components
vi.mock('@/components/ui/card', () => ({
  Card: ({ children }: any) => <div>{children}</div>,
  CardHeader: ({ children }: any) => <div>{children}</div>,
  CardTitle: ({ children }: any) => <div>{children}</div>,
  CardContent: ({ children }: any) => <div>{children}</div>,
  CardDescription: ({ children }: any) => <div>{children}</div>,
}))

describe('Cards Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main heading', () => {
    render(<Cards />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('renders star banner section', () => {
    render(<Cards />)

    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(screen.getByText('Star this project on GitHub')).toBeInTheDocument()
    expect(screen.getByText('View More')).toBeInTheDocument()
  })

  it('renders big section card text', () => {
    render(<Cards />)

    expect(
      screen.getByText('Large, full width sections goes here')
    ).toBeInTheDocument()
  })

  it('renders StatCard component', () => {
    render(<Cards />)

    expect(screen.getByTestId('stat-card')).toBeInTheDocument()
  })

  it('renders cards with titles', () => {
    render(<Cards />)

    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('Colored card')).toBeInTheDocument()
  })

  it('renders card descriptions', () => {
    render(<Cards />)

    const descriptions = screen.getAllByText(/Lorem ipsum/i)
    expect(descriptions.length).toBeGreaterThan(0)
  })

  it('renders section headings', () => {
    render(<Cards />)

    expect(screen.getByText('Big section cards')).toBeInTheDocument()
    expect(screen.getByText('Cards with title')).toBeInTheDocument()
  })
})