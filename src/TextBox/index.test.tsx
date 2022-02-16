import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import TextBox from './index';
import { TextBoxTypeEnum } from '..';

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
    render(<TextBox {...schema} schemaKey="textbox" />);
    const control = await screen.findByTestId('textbox')
    expect(control).toBeInTheDocument();

    expect(screen.queryByTestId('error')).toBe(null)

    fireEvent.focus(control)
    fireEvent.blur(control)
    await waitFor(() => screen.findByTestId('error'), { timeout: 1000 })

    const error = await screen.findByTestId('error');

    expect(error.textContent).toEqual('Text Box is required')
  })
  it('should trigger email validation for email', async () => {
    const schema = {
      required: true,
      title: 'Text Box',
      placeHolder: 'Place holder'
    };
    render(<TextBox {...schema} schemaKey="textbox" type={TextBoxTypeEnum.email}/>);
    const control = await screen.findByTestId('textbox')
    expect(control).toBeInTheDocument();
    expect(screen.queryByTestId('error')).toBe(null)

    fireEvent.change(control, { target: { value: '123' } })
    fireEvent.blur(control)
    await waitFor(() => screen.findByTestId('error'), { timeout: 1000 })

    const error = await screen.findByTestId('error');

    expect(error.textContent).toEqual('Text Box is not in the valid format')
  })

  it('should render text area', async () => {
    const schema = {
      required: true,
      title: 'Text Box',
      placeHolder: 'Place holder'
    };
    const { container } = render(<TextBox {...schema} schemaKey="textbox" type={TextBoxTypeEnum.textarea}/>);
    const control = await container.querySelector('textarea')
    expect(control).toBeInTheDocument();
  })

});
