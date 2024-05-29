import React, { useState, useEffect } from 'react'; 
import { useRouter } from 'next/router'; 

 
const Loader: React.FC = () => { 
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); 
 
  useEffect(() => { 
    let timer: NodeJS.Timeout
    const handleRouteChangeStart = (url: string) => { 
      if (url !== router.asPath) { 
        setIsLoading(true); 
      } 
    }; 
 
    const handleRouteChangeComplete = () => { 
      setTimeout(()=>{
        setIsLoading(false); 
      },500) 
    }; 
 
    // Trigger complete handler immediately to cover initial page load 
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
    <div className='loader'> 
      <div></div> 
      <img src='/loader.gif' alt='Loading.......'/>
    </div> 
  ); 
}; 
 
const styles = { 
  loader: { 
    position: 'fixed' as 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    // background: 'rgba(255, 255, 255, 0.7)', 
    zIndex: 1000, 
  }, 
  spinner: { 
    border: '16px solid #00000', 
    borderRadius: '50%', 
    borderTop: '16px solid #ffffff', 
    width: '120px', 
    height: '120px', 
    animation: 'spin 2s linear infinite', 
  }, 
  '@keyframes spin': { 
    '0%': { 
      transform: 'rotate(0deg)', 
    }, 
    '100%': { 
      transform: 'rotate(360deg)', 
    }, 
  }, 
}; 
 
export default Loader;