/**
 * @jest-environment jsdom
 */

import Card from '@/components/organisms/Card';
import { render, screen } from '@testing-library/react';

describe('Card component', () => {
  it('it should render a Card', () => {
    const mock = {
      id: '1',
      index: 1,
      imageUrl: '/path/to/image.jpg',
      promotion: 'discount',
      name: 'Special Dish',
      rating: 4.5,
      minCookTime: 15,
      maxCookTime: 30,
      isNew: true,
      categoryId: '1',
      restaurant: 'Restaurant name',
    };
    render(<Card items={mock} />);
    const card = screen.getByLabelText('card-food');
    expect(card).toBeInTheDocument();
  });

  it('it should render a Card', () => {
    const mock = {
      id: '1',
      index: 1,
      imageUrl: '/path/to/image.jpg',
      promotion: 'discount',
      name: 'Special Dish',
      rating: 4.5,
      isNew: true,
      categoryId: '1',
      restaurant: 'Restaurant name',
    };
    render(<Card items={mock} />);
    const card = screen.getByLabelText('card-food');
    expect(card).toBeInTheDocument();
  });
});
