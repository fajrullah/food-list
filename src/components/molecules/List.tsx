import Label from '@/components/atoms/Label';
import { memo } from 'react';
import style from './style.module.css';
/**
 * Memoized List Component.
 *
 * @component
 * @param {object} props - The properties of the List component.
 * @param {Array<object>} props.items - An array of items to display in the list.
 * @param {Function} props.onClick - The function to be called when an item is clicked.
 * @param {string} props.value - The value representing the currently selected item.
 * @returns {JSX.Element} - The memoized list component with items, highlighting the selected item.
 *
 * @example
 * // Render a memoized List with an array of items, onClick function, and a selected value
 * <List items={[{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }]} onClick={(id) => handleItemClick(id)} value={selectedItemId} />
 *
 * @note This component is memoized using React.memo to prevent unnecessary re-renders.
 */

function List({ items, onClick, value }: ListProps) {
  return (
    <ul className={style.horizontalList}>
      {items?.map((key, index) => (
        <li
          className={`${key.id === value && style.active}`}
          key={`${key.id + index}`}
          onClick={() => onClick(key.id)}
        >
          <Label label={key.name} />
        </li>
      ))}
    </ul>
  );
}

export default memo(List);
