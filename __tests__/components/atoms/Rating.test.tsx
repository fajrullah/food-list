/**
 * @jest-environment jsdom
 */
import Rating from '@/components/atoms/Rating';
import { render, screen } from '@testing-library/react';

describe('Rating component', () => {
  it('it should render a rating', () => {
    render(<Rating rating={4.32342} />);
    const rating = screen.getByLabelText('rating-food');
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent('4.3');
  });
});
