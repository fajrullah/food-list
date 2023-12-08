/**
 * @jest-environment jsdom
 */
import Button from '@/components/atoms/Button';
import { fireEvent, render, screen } from '@testing-library/react';
const onClick = jest.fn();
describe('Button component', () => {
  it('calls onClick callback when input value changes', async () => {
    render(<Button onClick={onClick} />);
    const button = screen.getByText('Show More');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
