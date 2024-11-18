import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the App component', async () => {
    render(<App />)

    await screen.getByRole('heading', { level: 1, name: 'Short Links With ShortURL' })
    await screen.getByRole('main')
    await screen.getByRole('list')
  })
})