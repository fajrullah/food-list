import style from './style.module.css';

/**
 * Label Component
 *
 * @component
 *
 * @param {object} props - The properties of the Label component.
 * @param {string} props.label - The text content of the label.
 *
 * @returns {JSX.Element} Label component.
 *
 * @example
 * // Basic Label
 * <Label label="example label" />
 *
 * @remarks
 * - The label text is capitalized using the `textTransform` CSS property.
 */

function Label({ label }: LabelProps) {
  return <div className={style.labelField}>{label}</div>;
}

export default Label;
