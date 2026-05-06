import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Forms from '../components/pages/Forms'


vi.mock('react-hook-form', async () => {
  const actual = await vi.importActual<any>('react-hook-form')
  return {
    ...actual,
    Controller: ({ render }: any) =>
      render({
        field: {
          value: '',
          onChange: vi.fn(),
        },
      }),
  }
})


vi.mock('@hookform/resolvers/zod', () => ({
  zodResolver: () => () => ({}),
}))


vi.mock('@/components/ui/input', () => ({
  Input: (props: any) => <input {...props} />,
}))

vi.mock('@/components/ui/label', () => ({
  Label: ({ children, ...props }: any) => (
    <label {...props}>{children}</label>
  ),
}))

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}))

vi.mock('@/components/ui/card', () => ({
  Card: ({ children }: any) => <div>{children}</div>,
}))

vi.mock('@/components/ui/textarea', () => ({
  Textarea: (props: any) => <textarea {...props} />,
}))

vi.mock('@/components/ui/checkbox', () => ({
  Checkbox: (props: any) => <input type="checkbox" {...props} />,
}))

vi.mock('@/components/ui/radio-group', () => ({
  RadioGroup: ({ children }: any) => <div>{children}</div>,
  RadioGroupItem: (props: any) => <input type="radio" {...props} />,
}))

vi.mock('@/components/ui/select', () => ({
  Select: ({ children }: any) => <div>{children}</div>,
  SelectTrigger: ({ children }: any) => <div>{children}</div>,
  SelectContent: ({ children }: any) => <div>{children}</div>,
  SelectItem: ({ children }: any) => <div>{children}</div>,
  SelectValue: () => <div>Select</div>,
}))

vi.mock('lucide-react', () => ({
  Calendar: () => <span data-testid="calendar-icon" />,
  Search: () => <span />,
  Star: () => <span data-testid="star-icon" />,
}))

describe('Forms Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders main heading and layout', () => {
    render(<Forms />)

    expect(screen.getByText('Forms with Validation')).toBeInTheDocument()
  })

  it('renders GitHub banner', () => {
    render(<Forms />)

    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(
      screen.getByText('Star this project on GitHub')
    ).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Forms />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Forms />)

    expect(
      screen.getByRole('button', { name: 'Submit Form' })
    ).toBeInTheDocument()
  })

  it('renders UI elements section', () => {
    render(<Forms />)

    expect(screen.getByText('Icons')).toBeInTheDocument()
    expect(screen.getByText('Buttons')).toBeInTheDocument()
    expect(screen.getByTestId('calendar-icon')).toBeInTheDocument()
  })

  it('prevents form submission reload', () => {
    render(<Forms />)

    const button = screen.getByRole('button', { name: 'Submit Form' })
    const form = button.closest('form')!

    const preventDefault = vi.fn()
    fireEvent.submit(form, { preventDefault })

    expect(preventDefault).toHaveBeenCalled()
  })
})