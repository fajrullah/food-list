/**
 * @jest-environment jsdom
 */
import Chip from '@/components/atoms/Chip';
import { render, screen } from '@testing-library/react';
describe('Chip component', () => {
  it('it should render a chip new', () => {
    render(<Chip variant="new" />);
    const chip = screen.getByLabelText('chip-description');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('New');
  });

  it('it should render a chip time', () => {
    render(
      <Chip
        variant="time"
        optionsTime={{
          max: 100,
          min: 100,
        }}
      />,
    );
    const chip = screen.getByLabelText('chip-description');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('100-100min');
  });

  it('it should render a chip time', () => {
    render(
      <Chip
        variant="time"
        optionsTime={{
          max: 100,
          min: 100,
        }}
      />,
    );
    const chip = screen.getByLabelText('chip-description');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('100-100min');
  });

  it('it should render a chip time', () => {
    render(<Chip variant="time" />);
    const chip = screen.getByLabelText('chip-description');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('0-0');
  });
});
