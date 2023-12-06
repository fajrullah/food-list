import Badge from '@/components/atoms/Badge';
import Chip from '@/components/atoms/Chip';
import Rating from '@/components/atoms/Rating';
import Image from 'next/image';

import childStyle from './style.module.css';

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

function Card({ items }: CardProps) {
  return (
    <div className={childStyle.card}>
      {renderCardImage(items?.imageUrl)}

      <div className={childStyle.cardBadge}>
        <Badge variant={items?.promotion} />
      </div>

      <div className={childStyle.cardBodyContainer}>
        {items?.name}

        <div className={childStyle.cardBodyContent}>
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

export default Card;
