/**
 * @jest-environment jsdom
 */
import List from '@/components/molecules/List';
import { render, screen, within } from '@testing-library/react';

jest.mock('@/components/atoms/Label', () => ({
  __esModule: true,
  default: jest.fn(({ label }) => <div data-testid="mock-label">{label}</div>),
}));

describe('List component', () => {
  it('it should render a List', () => {
    const mock = [
      {
        id: '1',
        name: 'All',
      },
      {
        id: '2',
        name: 'Sushi',
      },
      {
        id: '3',
        name: 'Burgers',
      },
      {
        id: '4',
        name: 'Pizza',
      },
      {
        id: '5',
        name: 'Meat Ball',
      },
    ];
    render(<List items={mock} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  it('it should render a List', () => {
    const mock = [
      {
        id: '1',
        name: 'All',
      },
      {
        id: '2',
        name: 'Sushi',
      },
      {
        id: '3',
        name: 'Burgers',
      },
    ];
    render(<List items={mock} />);
    const list = screen.getByRole('list');
    const { getAllByRole, getAllByTestId } = within(list);
    const items = getAllByRole('listitem');
    const mockLabels = getAllByTestId('mock-label');
    expect(items).toHaveLength(3);
    items.forEach((item, index) => {
      expect(mockLabels[index]).toHaveTextContent(item.textContent);
    });
  });
});
