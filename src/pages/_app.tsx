import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@component/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "../styles/index.css";
import "../styles/ResponsiveStyles.css";
import Loader from "@component/components/Loader";
import GoogleAnalytics from "@component/components/GoogleAnalytics"; 
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const router = useRouter();

  useEffect(() => {
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
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
        {isLoading ? <Loader /> : <Navbar isLoading/>}
      
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-59FC9R45R5" />
    </Provider>
  );
}

export default MyApp;
