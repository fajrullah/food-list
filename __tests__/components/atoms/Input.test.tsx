/**
 * @jest-environment jsdom
 */
import Input from '@/components/atoms/Input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Label component', () => {
  it('it should render a input with placeholder', () => {
    const testLabel = 'Enter restaurant name';
    const inputValue = 'Test Value';

    render(
      <Input placeholder={testLabel} value={inputValue} onChange={() => {}} />,
    );

    const inputElement = screen.getByPlaceholderText(testLabel);

    const inputWithInitialValue = screen.getByDisplayValue(inputValue);
    expect(inputWithInitialValue).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', async () => {
    const testLabel = 'Enter restaurant name';
    render(<Input placeholder={testLabel} />);
    const inputElement = screen.getByPlaceholderText(testLabel);
    fireEvent.change(inputElement, { target: { value: 'search something' } });
    expect(inputElement.value).toBe('search something');
  });
});
