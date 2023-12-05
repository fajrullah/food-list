import style from "./style.module.css";

interface LabelProps {
    readonly items: string[]
}


function Card({ items }: LabelProps) {
    return (
        <ul className={style.horizontalList}>

        </ul>
    )
}

export default Card;