import { render, screen } from '@testing-library/react';
import { CreateLinkForm } from '../components/create-link-form';

describe('CreateLinkForm', () => {
  it('renders the CreateLinkForm component', async () => {
    render(<CreateLinkForm />)

    await screen.getByRole('textbox')
    await screen.getByPlaceholderText('your.link.com/example')
  })
})