import LinkWrapper from '.'
import { render, screen } from '@testing-library/react'

describe('<LinkWrapper />', () => {
  it('should render link adn children', () => {
    render(<LinkWrapper href="/my-link">Anthing</LinkWrapper>)

    const children = screen.getAllByRole('link', { name: /anthing/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', 'my-link')
  })
})
