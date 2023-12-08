/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@/components/atoms/Button';
import InputWithIcon from '@/components/atoms/Input';
import List from '@/components/molecules/List';
import Card from '@/components/organisms/Card';
import styles from '@/pages/index.module.css';
import axios from 'axios';
import _ from 'lodash';
import Head from 'next/head';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
enum URL_API {
  categories = 'https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593',
  foods = 'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645',
}
enum CATEGORY {
  ALL = 'all',
}
const ARRAY_CHUNK = 9;
export default function Home() {
  const [categories, setCategories] = useState<CategoriesInterface[]>([
    {
      id: CATEGORY.ALL,
      name: 'All',
    },
  ]);
  const [foods, setFoods] = useState<FoodInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>(CATEGORY.ALL);
  const [isShowingShowMore, setIsShowingShowMore] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();
  const debouncedSearch = useDebounce<string>(search, 1000);
  const debouncedCategory = useDebounce<string>(category, 700);
  const foodRef = useRef<FoodInterface[]>([]);
  const foodPaginationRef = useRef<any>([]);
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('search', debouncedSearch), {
      scroll: false,
    });
  }, [debouncedSearch]);

  useEffect(() => {
    router.push(
      pathname + '?' + createQueryString('category', debouncedCategory),
      {
        scroll: false,
      },
    );
  }, [debouncedCategory]);

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('search', debouncedSearch), {
      scroll: false,
    });
  }, [debouncedSearch]);

  useEffect(() => {
    const filterData = () => {
      const immutableFoodRef = foodRef.current;

      const arrayFoods = immutableFoodRef.filter((key) => {
        const categoryAll = category === CATEGORY.ALL;
        if (search && category) {
          const validateCategory = key.categoryId === category || categoryAll;
          const name = key.name.toLowerCase();
          const searchToLower = search.toLowerCase();
          return validateCategory && name.includes(searchToLower);
        }

        if (category) {
          const validateCategory = key.categoryId === category || categoryAll;
          return validateCategory;
        }

        if (search) {
          const name = key.name.toLowerCase();
          const searchToLower = search.toLowerCase();
          return name.includes(searchToLower);
        }
      });

      const arrayChunk = _.chunk(arrayFoods, ARRAY_CHUNK) as any;

      foodPaginationRef.current = arrayChunk;

      const page = 0;

      setCurrentPage(page);

      setFoods(arrayChunk[page]);
    };
    filterData();
  }, [debouncedSearch, debouncedCategory]);

  useEffect(() => {
    const leng = foodPaginationRef.current.length ?? 0;
    setIsShowingShowMore(leng > 1 && currentPage + 1 < leng);
  }, [foods]);

  useEffect(() => {
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    if (search) {
      setSearch(search);
    }
    if (category) {
      setCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(URL_API.categories);
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
        const response = await axios.get(URL_API.foods);

        const arrayFoods = response.data?.foods ?? [];

        foodRef.current = arrayFoods;

        const arrayChunk = _.chunk(arrayFoods, ARRAY_CHUNK) as any;

        foodPaginationRef.current = arrayChunk;

        const page = 0;

        setCurrentPage(page);

        setFoods(arrayChunk[page]);

        if (arrayChunk.length < 1) {
          setIsShowingShowMore(false);
        }
      } catch (error) {
        setFoods([]);
      }
    };
    fetchFoods();
  }, []);

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [],
  );

  const handleFilterCategories = useCallback((id: string) => {
    setCategory(id);
  }, []);

  const handlePagination = useCallback(() => {
    const getData = foodPaginationRef.current[currentPage + 1] ?? [];
    setCurrentPage((prevPage) => prevPage + 1);
    setFoods((prevState) => [...prevState, ...getData]);
  }, [currentPage, setFoods, setCurrentPage, foodPaginationRef]);

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
              value={search ?? 'all'}
            />
          </div>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <List
              items={categories}
              onClick={handleFilterCategories}
              value={category}
            />
          </div>
        </div>
        <div className={styles.grid}>
          {foods?.map((key) => {
            return <Card items={key} key={key.id} />;
          })}
        </div>
        {isShowingShowMore && <Button onClick={handlePagination} />}
      </main>
    </div>
  );
}
