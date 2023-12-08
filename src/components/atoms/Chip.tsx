import style from './style.module.css';

const variantNew = () => {
  return <div className={`${style.chipText} ${style.chipIsNew}`}>New</div>;
};

const variantTime = ({ min, max }: TimeVariantProps) => {
  return (
    <div className={style.chipText}>
      {min}-{max}min
    </div>
  );
};

/**
 * Chip Component.
 *
 * @component
 * @param {object} props - The properties of the Chip component.
 * @param {string} props.variant - The type of chip to render. Accepted values: "new", "time".
 * @param {object} props.optionsTime - Optional time options for the "time" variant.
 * @param {number} props.optionsTime.min - The minimum time value for the "time" variant (default: 0).
 * @param {number} props.optionsTime.max - The maximum time value for the "time" variant (default: 0).
 * @returns {JSX.Element} - The chip component with the specified variant and options.
 *
 * @example
 * // Render a Chip with the "new" variant
 * <Chip variant="new" />
 *
 * // Render a Chip with the "time" variant and custom time options
 * <Chip variant="time" optionsTime={{ min: 10, max: 30 }} />
 */
function Chip({ variant, optionsTime }: ChipProps) {
  return (
    <div className={style.chip} aria-label="chip-description">
      {variant === 'new' && variantNew()}
      {variant === 'time' &&
        variantTime({ min: optionsTime?.min ?? 0, max: optionsTime?.max ?? 0 })}
    </div>
  );
}

export default Chip;
