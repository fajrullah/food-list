
import Image from "next/image";
import style from "./style.module.css";

interface RatingProps {
    readonly rating: number
}

function Rating({ rating }: RatingProps) {
    return (
        <div className={style.starField}>            
            <Image src="/assets/star-svgrepo-com.svg" alt="Food star" width={9} height={9} />
            {rating.toFixed(1)}
        </div>
    )
}

export default Rating;