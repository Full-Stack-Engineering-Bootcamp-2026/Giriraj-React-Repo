import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Dashboard from '../components/pages/Tables'


vi.mock('react-icons/ci', () => ({
  CiStar: () => <span data-testid="star-icon" />,
}))


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
    <button onClick={onClick}>Previous</button>
  ),
  PaginationNext: ({ onClick }: any) => (
    <button onClick={onClick}>Next</button>
  ),
  PaginationLink: ({ children }: any) => <span>{children}</span>,
}))


const mockData = {
  info: { pages: 5 },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'rick.jpg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      image: 'morty.jpg',
    },
  ],
}

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
) as any

describe('Tables Page (Dashboard Component)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders page title and banner', () => {
    render(<Dashboard />)

    expect(screen.getByText('Tables')).toBeInTheDocument()
    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(
      screen.getByText('Star this project on GitHub')
    ).toBeInTheDocument()
  })

  it('shows loading state initially', () => {
    render(<Dashboard />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders table data after API load', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    expect(screen.getByText('Morty Smith')).toBeInTheDocument()
    expect(screen.getAllByText('Alive').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Human').length).toBeGreaterThan(0)
  })

  it('renders character images', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      const images = screen.getAllByRole('img')
      expect(images.length).toBeGreaterThan(0)
    })
  })

  it('renders pagination controls', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText(/Page 1 of/i)).toBeInTheDocument()
    })

    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('clicking next updates pagination handler', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Next')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Next'))

    expect(fetch).toHaveBeenCalled()
  })

  it('clicking previous updates pagination handler', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Previous')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Previous'))

    expect(fetch).toHaveBeenCalled()
  })
})