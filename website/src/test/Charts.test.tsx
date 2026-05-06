import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Cards from '../components/pages/Cards'


vi.mock('react-chartjs-2', () => ({
  Doughnut: () => <div>Doughnut Chart</div>,
  Line: () => <div>Line Chart</div>,
  Bar: () => <div>Bar Chart</div>,
  Pie: () => <div>Pie Chart</div>,
}))


vi.mock('react-icons/ci', () => ({
  CiStar: () => <span data-testid="star-icon" />,
}))

describe('Charts Page (Cards)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main heading', () => {
    render(<Cards />)

    expect(screen.getByText('Charts')).toBeInTheDocument()
  })

  it('renders star banner section', () => {
    render(<Cards />)

    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(
      screen.getByText('Star this project on GitHub')
    ).toBeInTheDocument()
    expect(screen.getByText('View More')).toBeInTheDocument()
  })

  it('renders chart description text', () => {
    render(<Cards />)

    expect(
      screen.getByText(/Charts are provided by Chart.js/i)
    ).toBeInTheDocument()
  })

  it('renders chart section labels', () => {
    render(<Cards />)

    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('Trends')).toBeInTheDocument()
    expect(screen.getByText('Bars')).toBeInTheDocument()
  })

  it('renders all chart placeholders', () => {
    render(<Cards />)

    expect(screen.getByText('Doughnut Chart')).toBeInTheDocument()
    expect(screen.getByText('Line Chart')).toBeInTheDocument()
    expect(screen.getByText('Bar Chart')).toBeInTheDocument()
  })

  it('renders correct number of charts', () => {
    render(<Cards />)

    expect(screen.getAllByText('Doughnut Chart')).toHaveLength(1)
    expect(screen.getAllByText('Line Chart')).toHaveLength(1)
    expect(screen.getAllByText('Bar Chart')).toHaveLength(1)
  })
})