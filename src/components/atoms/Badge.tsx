
import style from "./style.module.css";

interface BadgeProps{
    readonly variant: string | null;
}

const variantGift = () => {
    return <div>Gift</div>
}

const variantGetOne = () => {
    return <div>1+1</div>
}

const variantDiscount = () => {
    return <div>%</div>
}

const getVariant = (variant: string) => {
    if(variant === "gift"){
        return variantGift()
    }

    if(variant === "1+1"){
        return variantGetOne()
    }

    if(variant === "discount"){
        return variantDiscount()
    }
    return null;
}

const renderBadge = (variant: string) => {
    return (
        <div className={style.chip}> 
            { getVariant(variant.toLowerCase()) }
        </div>
    )
}

function Badge({ variant }: BadgeProps) {
    return variant && renderBadge(variant)
}

export default Badge;