import Badge from '@/components/atoms/Badge';
import Chip from '@/components/atoms/Chip';
import Rating from '@/components/atoms/Rating';
import Image from 'next/image';
import { memo } from 'react';
import style from './style.module.css';

const renderCardImage = (src: string) => {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
      alt="food list"
    />
  );
};
/**
 * Memoized Card Component.
 *
 * @component
 * @param {object} props - The properties of the Card component.
 * @param {object} props.items - The data representing the content of the card.
 * @param {string} props.items.imageUrl - The URL of the card image.
 * @param {string} props.items.promotion - The promotion variant for the Badge component.
 * @param {string} props.items.name - The name of the item displayed in the card.
 * @param {number} props.items.rating - The numerical rating for the Rating component.
 * @param {number} props.items.minCookTime - The minimum cook time for the Chip component.
 * @param {number} props.items.maxCookTime - The maximum cook time for the Chip component.
 * @param {boolean} props.items.isNew - A boolean flag indicating if the item is new for the Chip component.
 * @returns {JSX.Element} - The memoized card component with various atoms and molecules.
 *
 * @example
 * // Render a memoized Card with data representing the content of the card
 * <Card items={{
 *   imageUrl: '/path/to/image.jpg',
 *   promotion: 'discount',
 *   name: 'Special Dish',
 *   rating: 4.5,
 *   minCookTime: 15,
 *   maxCookTime: 30,
 *   isNew: true,
 * }} />
 *
 * @note This component is memoized using React.memo to prevent unnecessary re-renders.
 */
function Card({ items }: CardProps) {
  return (
    <div className={style.card}>
      {renderCardImage(items?.imageUrl)}

      <div className={style.cardBadge}>
        <Badge variant={items?.promotion} />
      </div>

      <div className={style.cardBodyContainer}>
        {items?.name}

        <div className={style.cardBodyContent}>
          <Rating rating={items?.rating} />

          <Chip
            variant="time"
            optionsTime={{
              min: items?.minCookTime ?? 0,
              max: items?.maxCookTime ?? 0,
            }}
          />

          {items?.isNew && <Chip variant="new" />}
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
