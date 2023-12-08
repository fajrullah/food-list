import Image from 'next/image';
import { memo } from 'react';
import style from './style.module.css';

/**
 * Memoized Button Component.
 *
 * @component
 * @param {object} props - The properties of the Button component.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} - The memoized button component with an icon and text.
 *
 * @example
 * // Render a memoized Button with a custom onClick function
 * <Button onClick={() => handleButtonClick()} />
 *
 * @note This component is memoized using React.memo to prevent unnecessary re-renders.
 */
function Button({ onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      <Image
        src="/assets/plus-svgrepo-com.svg"
        alt="plus"
        width={16}
        height={16}
        style={{
          paddingRight: '0.2rem',
        }}
      />
      Show More
    </button>
  );
}

export default memo(Button);
