import style from '@/components/atoms/style.module.css';
import { memo } from 'react';

/**
 * Memoized Input Component.
 *
 * @component
 * @param {object} props - The properties of the Input component.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {Function} props.onChange - The function to be called when the input value changes.
 * @param {string} props.value - The current value of the input field.
 * @returns {JSX.Element} - The memoized input component.
 *
 * @example
 * // Render a memoized Input with a custom placeholder and onChange function
 * <Input placeholder="Enter text" onChange={(e) => handleInputChange(e)} value={inputValue} />
 *
 * @note This component is memoized using React.memo to prevent unnecessary re-renders.
 */
function Input({ placeholder, onChange, value }: InputProps) {
  return (
    <input
      onChange={onChange}
      className={style.inputField}
      value={value}
      type="text"
      placeholder={placeholder}
    />
  );
}

export default memo(Input);
