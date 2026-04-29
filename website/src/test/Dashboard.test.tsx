import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Dashboard from '../components/pages/Dashboard'

// ✅ Mock charts (important)
vi.mock('react-chartjs-2', () => ({
  Doughnut: () => <div>Doughnut Chart</div>,
  Line: () => <div>Line Chart</div>,
}))

// ✅ Mock UI components (if needed)
vi.mock('@/components/ui/table', () => ({
  Table: ({ children }: any) => <table>{children}</table>,
  TableBody: ({ children }: any) => <tbody>{children}</tbody>,
  TableRow: ({ children }: any) => <tr>{children}</tr>,
  TableCell: ({ children }: any) => <td>{children}</td>,
  TableHead: ({ children }: any) => <th>{children}</th>,
  TableHeader: ({ children }: any) => <thead>{children}</thead>,
}))

vi.mock('@/components/ui/pagination', () => ({
  Pagination: ({ children }: any) => <div>{children}</div>,
  PaginationContent: ({ children }: any) => <div>{children}</div>,
  PaginationItem: ({ children }: any) => <div>{children}</div>,
  PaginationPrevious: ({ onClick }: any) => (
    <button onClick={onClick}>Prev</button>
  ),
  PaginationNext: ({ onClick }: any) => (
    <button onClick={onClick}>Next</button>
  ),
}))

// ✅ Mock fetch
const mockData = {
  info: { pages: 2 },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'test.jpg',
    },
  ],
}

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
) as any

describe('Dashboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading initially', () => {
    render(<Dashboard />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders API data correctly', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(screen.getByText('Alive')).toBeInTheDocument()
    expect(screen.getByText('Human')).toBeInTheDocument()
  })

  it('renders charts placeholders', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Doughnut Chart')).toBeInTheDocument()
      expect(screen.getByText('Line Chart')).toBeInTheDocument()
    })
  })

  it('handles pagination next click', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    const nextBtn = screen.getByText('Next')
    fireEvent.click(nextBtn)

    expect(fetch).toHaveBeenCalledTimes(2)
  })
})