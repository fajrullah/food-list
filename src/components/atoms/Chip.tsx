
import style from "./style.module.css";

interface ChipProps{
    readonly variant: string
    readonly optionsTime?: TimeVariantProps
}

interface TimeVariantProps {
    readonly min: number
    readonly max: number
}

const variantNew = () => {
    return <div className={`${style.chipText} ${style.chipIsNew}`}>New</div>
}

const variantTime = ({ min, max }: TimeVariantProps) => {
    return <div className={style.chipText}>{min}-{max}min</div>
}   

function Chip({ variant, optionsTime }: ChipProps) {
    return (
        <div className={style.chip}>            
            { variant === "new" && variantNew() }
            { variant === "time" && variantTime({ min: 100, max: 100}) }
        </div>
    )
}

export default Chip;