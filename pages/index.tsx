import InputWithIcon from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';

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
        <Card items={{
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
        }} />
      </main>
    </div>
  )
}
