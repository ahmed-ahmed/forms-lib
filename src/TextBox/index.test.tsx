import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import TextBox from './index';

describe('<TextBox />', () => {
  it('render TextBox without any params', () => {
    render(<TextBox />);
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
  });

  it('should trigger required validation', async () => {
    const schema = {
      required: true,
      title: 'Text Box',
      placeHolder: 'Place holder'
    };
    render(<TextBox schema={schema} schemaKey="textbox" />);
    const control = await screen.findByTestId('textbox')
    expect(control).toBeInTheDocument();

    expect(screen.queryByTestId('error')).toBe(null)

    fireEvent.focus(control)
    fireEvent.blur(control)
    await waitFor(() => screen.findByTestId('error'), { timeout: 1000 })

    const error = await screen.findByTestId('error');

    expect(error.textContent).toEqual('Text Box is required')
  })
});
