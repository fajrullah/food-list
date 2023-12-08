/**
 * @jest-environment jsdom
 */

import List from '@/components/molecules/List';
import { fireEvent, render, screen, within } from '@testing-library/react';

jest.mock('@/components/atoms/Label', () => ({
  __esModule: true,
  default: jest.fn(({ label }) => <div data-testid="mock-label">{label}</div>),
}));
const onClick = jest.fn();

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
    render(<List items={mock} onClick={() => {}} value="" />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(5);
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
    render(<List items={mock} onClick={() => {}} value="" />);
    const list = screen.getByRole('list');
    const { getAllByRole, getAllByTestId } = within(list);
    const items = getAllByRole('listitem');
    const mockLabels = getAllByTestId('mock-label');
    expect(items).toHaveLength(3);
    items.forEach((item, index) => {
      expect(mockLabels[index]).toHaveTextContent(item.textContent);
    });
  });

  it('calls onClick callback when input value changes', async () => {
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
    render(<List items={mock} onClick={onClick} value="" />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    items.forEach((item, index) => {
      fireEvent.click(item);
      expect(onClick).toHaveBeenCalled();
    });
  });

  it('it should render a bacgkround an style', async () => {
    const mock = [
      {
        id: '1',
        name: 'All',
      },
      {
        id: '2',
        name: 'Sushi',
      },
    ];
    render(<List items={mock} onClick={onClick} value="1" />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items[0]).toHaveClass('active');
  });
});
