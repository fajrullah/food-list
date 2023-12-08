/**
 * @jest-environment jsdom
 */
import Badge from '@/components/atoms/Badge';
import { render, screen } from '@testing-library/react';

describe('Badge component', () => {
  it('it should render a badge 1+1', () => {
    render(<Badge variant="1+1" />);
    const badge = screen.getByLabelText('badge');
    expect(badge).toBeInTheDocument();
  });
  it('it should render a badge %', () => {
    render(<Badge variant="discount" />);
    const badge = screen.getByLabelText('badge');
    expect(badge).toBeInTheDocument();
  });
  it('it should render a badge 1+1', () => {
    render(<Badge variant="gift" />);
    const badge = screen.getByLabelText('badge');
    expect(badge).toBeInTheDocument();
  });

  it('it should render a badge null', () => {
    render(<Badge variant="somethinelse" />);
    const badge = screen.getByLabelText('badge');
    expect(badge).toBeInTheDocument();
  });

  it('it should render a badge 1+1', () => {
    render(<Badge variant={null} />);
    const textContent = screen.queryByText(/./);
    expect(textContent).not.toBeInTheDocument();
  });
});
