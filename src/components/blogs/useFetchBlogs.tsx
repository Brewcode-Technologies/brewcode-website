import { useState, useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  img: string;
  imgAlt: string;
}

const useFetchBlogs = (url: string) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        console.log('Fetched data:', data); // Log the raw data

        const fetchedBlogs: Blog[] = data.items.map((item: any, index: number) => ({
          id: index,
          title: item.title,
          category: item.categories[0] || 'Uncategorized',
          description: item.description,
          link: item.link,
          img: item.thumbnail,
          imgAlt: item.title,
        }));

        setBlogs(fetchedBlogs);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        console.error('Error fetching data:', err); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { blogs, loading, error };
};

export default useFetchBlogs;
