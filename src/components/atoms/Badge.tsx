import Image from 'next/image';
import style from './style.module.css';

enum BadgeTypes {
  GIFT = 'gift',
  BUYONE_GETONE = '1+1',
  DISCOUNT = 'discount',
}
enum SIZE {
  BADGE = 16,
}

const getVariant = (variant: string) => {
  switch (variant) {
    case BadgeTypes.GIFT:
      return (
        <Image
          src="/assets/gift-svgrepo-com.svg"
          alt="Food star"
          width={SIZE.BADGE}
          height={SIZE.BADGE}
        />
      );
    case BadgeTypes.BUYONE_GETONE:
      return BadgeTypes.BUYONE_GETONE;
    case BadgeTypes.DISCOUNT:
      return (
        <Image
          src="/assets/discount-svgrepo-com.svg"
          alt="Food star"
          width={SIZE.BADGE}
          height={SIZE.BADGE}
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
      aria-label="badge"
      className={`${style.badge}`}
      style={{ backgroundColor: variantBackgroundColor }}
    >
      {getVariant(variant.toLowerCase())}
    </div>
  );
};

/**
 * Badge Component.
 *
 * @component
 * @param {object} props - The properties of the Badge component.
 * @param {string} props.variant - The type of badge to render. Accepted values: "discount", "1+1", "gift".
 * @returns {JSX.Element|null} - The badge component with the specified variant, or null if no variant is provided.
 *
 * @example
 * // Render a Badge with a discount variant
 * <Badge variant="discount" />
 *
 * // Render a Badge with a 1+1 variant
 * <Badge variant="1+1" />
 *
 * // Render a Badge with a gift variant
 * <Badge variant="gift" />
 *
 * // Render nothing when no variant is provided
 * <Badge />
 */
function Badge({ variant }: BadgeProps) {
  return variant && renderBadge(variant);
}

export default Badge;
