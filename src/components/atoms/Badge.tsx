import Image from 'next/image';
import style from './style.module.css';

interface BadgeProps {
  readonly variant: string | null;
}

enum BadgeTypes {
  GIFT = 'gift',
  BUYONE_GETONE = '1+1',
  DISCOUNT = 'discount',
}

const getVariant = (variant: string) => {
  switch (variant) {
    case BadgeTypes.GIFT:
      return (
        <Image
          src="/assets/gift-svgrepo-com.svg"
          alt="Food star"
          width={9}
          height={9}
        />
      );
    case BadgeTypes.BUYONE_GETONE:
      return BadgeTypes.BUYONE_GETONE;
    case BadgeTypes.DISCOUNT:
      return (
        <Image
          src="/assets/discount-svgrepo-com.svg"
          alt="Food star"
          width={9}
          height={9}
        />
      );
    default:
      return null;
  }
};

const getVariantBackgroundColor = (variant: string): string => {
  switch (variant.toLowerCase()) {
    case BadgeTypes.GIFT:
      return '#00b1ff';
    case BadgeTypes.BUYONE_GETONE:
      return '#8f64ff';
    case BadgeTypes.DISCOUNT:
      return '#ff696f';
    default:
      return '#e0e0e0';
  }
};

const renderBadge = (variant: string) => {
  const variantBackgroundColor = getVariantBackgroundColor(
    variant.toLowerCase(),
  );
  return (
    <div
      className={`${style.chip} ${style.badge}`}
      style={{ backgroundColor: variantBackgroundColor }}
    >
      {getVariant(variant.toLowerCase())}
    </div>
  );
};

function Badge({ variant }: BadgeProps) {
  return variant && renderBadge(variant);
}

export default Badge;
