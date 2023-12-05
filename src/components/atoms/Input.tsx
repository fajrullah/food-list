
import style from "@/components/atoms/style.module.css";
interface InputProps {
    readonly placeholder: string
}

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

function Input({ placeholder }: InputProps) {
    return (<input className={style.inputField} type="text" placeholder={placeholder}/>
    )
}

export default Input;
