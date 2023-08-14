import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '.';

describe('Select Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  test('renders Select component', () => {
    const { getByText } = render(
      <Select options={options} />
    );

    const labelElement = getByText(/Label do select/i);
    expect(labelElement).toBeInTheDocument();

    for (const option of options) {
      const optionElement = getByText(option);
      expect(optionElement).toBeInTheDocument();
    }
  });

  test('selects an option', () => {
    const setQueryTypeMock = jest.fn();
    const { getByText } = render(
      <Select options={options} setQueryType={setQueryTypeMock} />
    );

    const optionToSelect = options[1]; // Select the second option
    fireEvent.click(getByText(optionToSelect));

    expect(setQueryTypeMock).toHaveBeenCalledWith(optionToSelect);
  });

});