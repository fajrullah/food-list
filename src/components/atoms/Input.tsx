
import style from "@/components/atoms/input.module.css";
interface LabelProps {
    readonly placeholder: string
}

function Input({ placeholder }: LabelProps) {
    return (<input className={style.inputField} type="text" placeholder={placeholder}/>
    )
}

export default Input;
