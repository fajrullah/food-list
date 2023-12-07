import style from '@/components/atoms/style.module.css';

/**
 * Input Component
 *
 * @component
 *
 * @param {object} props - The properties of the Input component.
 * @param {string} props.placeholder - The placeholder text for the input field.
 *
 * @returns {JSX.Element} Input component.
 *
 * @example
 * // Basic Input
 * <Input placeholder="Type something" />
 *
 * @remarks
 * - Customize appearance with the `style.inputField` class.
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

export default Input;
