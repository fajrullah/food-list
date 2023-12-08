import Image from 'next/image';
import style from './style.module.css';
/**
 * Rating Component.
 *
 * @component
 * @param {object} props - The properties of the Rating component.
 * @param {number} props.rating - The numerical rating to display.
 * @returns {JSX.Element} - The rating component with an icon and numerical rating.
 *
 * @example
 * // Render a Rating component with a specific numerical rating
 * <Rating rating={4.5232242} />
 * to be Rating 4.5
 */
function Rating({ rating }: RatingProps) {
  return (
    <div className={style.starField}>
      <Image
        src="/assets/star-svgrepo-com.svg"
        alt="Food star"
        width={16}
        height={16}
      />
      {rating.toFixed(1)}
    </div>
  );
}

export default Rating;
