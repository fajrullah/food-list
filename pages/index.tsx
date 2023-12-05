import InputWithIcon from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';

import Badge from '@/components/atoms/Badge';
import Chip from '@/components/atoms/Chip';
import Rating from '@/components/atoms/Rating';
import List from '@/components/molecules/List';
import Card from '@/components/organisms/Card';

import Head from 'next/head';

import styles from '@/pages/index.module.css';
const Dummy = [
  {
    "id": "628b5decc94a27754f30e6f1",
    "index": 0,
    "rating": 3.9508,
    "promotion": "gift",
    "isNew": false,
    "categoryId": "6288a89fac9e970731bfaa7b",
    "minCookTime": 80,
    "maxCookTime": 100,
    "restaurant": "Niquent",
    "name": "Niquent Drinks",
    "imageUrl": "https://source.unsplash.com/random/400x400?Drinks"
  },
  {
    "id": "628b5decf39bcc4e982fc88a",
    "index": 1,
    "rating": 4.9874,
    "promotion": "1+1",
    "isNew": false,
    "categoryId": "6288a89f1f0152b8c2cd512b",
    "minCookTime": 120,
    "maxCookTime": 140,
    "restaurant": "Boilicon",
    "name": "Boilicon Shushi",
    "imageUrl": "https://source.unsplash.com/random/400x400?Shushi"
  },
  {
    "id": "628b5dec6678e96d75f2f7de",
    "index": 2,
    "rating": 3.4518,
    "promotion": null,
    "isNew": true,
    "categoryId": "6288a89f1f0152b8c2cd512b",
    "minCookTime": 100,
    "maxCookTime": 120,
    "restaurant": "Quinex",
    "name": "Quinex Shushi",
    "imageUrl": "https://source.unsplash.com/random/400x400?Shushi"
  },
  {
    "id": "628b5dec97eacf5e8a604bd7",
    "index": 3,
    "rating": 1.5975,
    "promotion": "discount",
    "isNew": false,
    "categoryId": "6288a89f7338764f2071a8a8",
    "minCookTime": 120,
    "maxCookTime": 140,
    "restaurant": "Perkle",
    "name": "Perkle Pizza",
    "imageUrl": "https://source.unsplash.com/random/400x400?Pizza"
  }]
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YumPlates | Food</title>
        <link rel="icon" href="/icons8-kawaii-cupcake-32.png" />
      </Head>

      <main>
        <Label label='sata something'/>
        <InputWithIcon placeholder='Enter restaurant name...' />
        <List items={["All", "Sushi", "Piza", "Burgers", "Hit Meals"]}/>
        <Rating rating={4.4423232} />
        <Chip variant="new" />
        <Chip variant="time" optionsTime={{
          min: 100,
          max: 100
        }} />
        <Badge variant={null}/>
        <Badge variant={"1+1"}/>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p> */}

        <Card items={Dummy} />
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
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
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
