import Button from '@/components/atoms/Button';
import InputWithIcon from '@/components/atoms/Input';
import List from '@/components/molecules/List';
import Card from '@/components/organisms/Card';
import styles from '@/pages/index.module.css';
import axios from 'axios';
import _ from 'lodash';
import Head from 'next/head';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'usehooks-ts';

export default function Home() {
  const [categories, setCategories] = useState<CategoriesInterface[]>([
    {
      id: 'all',
      name: 'All',
    },
  ]);
  const [foods, setFoods] = useState<FoodInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const debouncedSearch = useDebounce<string>(search, 1000);
  const debouncedCategory = useDebounce<string>(category, 1000);

  useEffect(() => {
    console.log('doing the bounce', debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    console.log('doing the bounce', debouncedCategory);
  }, [debouncedCategory]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleFilterCategories = (id: string) => {
    setCategory(id);
  };

  const foodRef = useRef<any>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // get response from API to fetch categories
        const response = await axios.get(
          'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593',
        );
        const responseCategories = response.data ?? [];

        setCategories([
          {
            id: 'all',
            name: 'All',
          },
          ...responseCategories,
        ]);
      } catch (error) {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645',
        );

        const arrayFoods = response.data?.foods ?? [];

        const arrayChunk = _.chunk(arrayFoods, 6) as any;

        foodRef.current = arrayChunk;

        const page = 0;

        setCurrentPage(page);

        setFoods(arrayChunk[page]);
      } catch (error) {
        setFoods([]);
      }
    };
    fetchFoods();
  }, []);

  const handlePagination = () => {
    const getData = foodRef.current[currentPage + 1] ?? [];
    setCurrentPage((prevPage) => prevPage + 1);
    setFoods((prevSate) => [...prevSate, ...getData]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>YumPlates | Food</title>
        <link rel="icon" href="/icons8-kawaii-cupcake-32.png" />
      </Head>
      <main>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <InputWithIcon
              placeholder="Enter restaurant name..."
              onChange={handleSearchChange}
            />
          </div>
          <div className={styles.search}>
            <List items={categories} onClick={handleFilterCategories} />
          </div>
        </div>
        <div className={styles.grid}>
          {foods?.map((key) => {
            return <Card items={key} key={key.id} />;
          })}
        </div>
        <Button onClick={handlePagination} />
      </main>
    </div>
  );
}
