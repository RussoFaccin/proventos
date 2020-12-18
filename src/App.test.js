import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Should render the App component', () => {
    render(<App />);
  });

  it('Should display <NewInfo /> with "Correct" title', () => {
    render(<App />);
    
    fireEvent.click(screen.getByRole('button', {name: /provento/i}));

    screen.getByRole('heading', {
      name: /proventos/i
    });

    fireEvent.click(screen.getByRole('button', {name: /aporte/i}));

    screen.getByRole('heading', {
      name: /aporte/i
    });
  });

  it('Should close <NewInfo /> on action "Cancel"', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', {name: /aporte/i}));

    fireEvent.click(screen.getByRole('button', {name: /cancelar/i}));

    const result = screen.queryByRole('heading', {
      name: /aporte/i
    });

    expect(result).toBeNull();
  });

  it('Should close <NewInfo /> on action "Save"', () => {
    render(<App />);

    // Open <Newinfo />
    fireEvent.click(screen.getByRole('button', {name: /aporte/i}));

    // Fill form
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
    fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

    // Save action
    fireEvent.click(screen.getByRole('button', {name: /salvar/i}));

    const result = screen.queryByRole('heading', {name: /aporte/i});

    expect(result).toBeNull();
  });

  it('Should add a item to list', () => {
    render(<App />);

    // Open <Newinfo />
    fireEvent.click(screen.getByRole('button', {name: /provento/i}));

    // Fill form
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-10-05' } });
    fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

    // Save action
    fireEvent.click(screen.getByRole('button', {name: /salvar/i}));

    screen.getByText('05/10/2020');
  });

  it('Should open new info with values', () => {
    const view = render(<App />);

    // Open <Newinfo />
    fireEvent.click(screen.getByRole('button', {name: /provento/i}));

    // Fill form
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2010-06-10' } });
    fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

    // Save
    fireEvent.click(screen.getByRole('button', {name: /salvar/i}));

    const element = view.container.querySelector('.orderList__row');
    fireEvent.click(element);

    const dateField = screen.getByLabelText(/data/i).value;
    const valueField = screen.getByLabelText(/value/i).value;
    
    expect(dateField).toBe('2010-06-10');
    expect(valueField).toBe('450.65');
  });

  it('Should update item on save', async () => {
    render(<App />);

    // Open <Newinfo />
    fireEvent.click(screen.getByRole('button', {name: /provento/i}));

    // Fill form
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2010-06-10' } });
    fireEvent.change(screen.getByRole('textbox', {name: /value/i}), { target: { value: '450.65' } });

    // Save
    fireEvent.click(screen.getByRole('button', {name: /salvar/i}));
    
    // Select item
    fireEvent.click(screen.getByText('10/06/2010'));

    // Fill form
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2020-12-18' } });

    // Save
    fireEvent.click(screen.getByRole('button', {name: /salvar/i}));

    expect(screen.queryByText('10/06/2010')).toBeFalsy();
  });
})
