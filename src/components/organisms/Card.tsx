import Badge from '@/components/atoms/Badge';
import Chip from '@/components/atoms/Chip';
import Rating from '@/components/atoms/Rating';
import Image from 'next/image';

import styles from './index.module.css';
import childStyle from './style.module.css';
interface FoodInterface {
  id: string;
  index: number;
  rating: number;
  promotion: string | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

interface LabelProps extends FoodInterface {}

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

function Card({ imageUrl }: LabelProps) {
  return (
    <div className={styles.grid}>
      <div className={childStyle.card}>
        {renderCardImage(imageUrl)}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: 2,
            overflow: 'hidden',
          }}
        >
          <Badge variant={'gift'} />
        </div>
        <div className={childStyle.cardBodyContainer}>
          Dominos Pizza
          <div className={childStyle.cardBodyContent}>
            <Rating rating={4.4423232} />
            <Chip
              variant="time"
              optionsTime={{
                min: 100,
                max: 100,
              }}
            />
            <Chip variant="new" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
