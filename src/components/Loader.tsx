import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleRouteChangeStart = (url: string) => {
      if (url !== router.asPath) {
        setIsLoading(true);
      }
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    handleRouteChangeComplete();

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);


  if (!isLoading) return null;

  return (
    <div className='loader' >
      <div></div>
      <img src='/loader.gif' alt='Loading.......'/>
    </div>
  );
};

export default Loader;
