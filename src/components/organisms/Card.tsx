import styles from "./index.module.css";
import childStyle from "./style.module.css";

interface FoodInterface {
    id: string;
    index: number;
    rating: number;
    promotion: string | null;
    isNew: boolean;
    categoryId: string;
    minCookTime: number;
    maxCookTime: number;
    restaurant: string;
    name: string;
    imageUrl: string;
}

interface LabelProps {
    readonly items: FoodInterface[]
}


function Card({ items }: LabelProps) {
    return (
        <div className={styles.grid}>
            <div className={childStyle.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
            </div>

            {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
            >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a href="https://vercel.com/new" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </a> */}
      </div>
    )
}

export default Card;