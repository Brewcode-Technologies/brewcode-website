
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@component/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

import Script from "next/script";
import { pageview } from "@component/lib/gtm";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;


function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  // Loader logic
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

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

useEffect(() => {
  const handleRouteChange = (url: string) => {
    console.log("Page changed to:", url);

    // Google Tag Manager
    pageview(url);
    console.log("GTM pageview triggered:", url);

    // Microsoft Clarity
    if ((window as any).clarity) {
      (window as any).clarity('track', 'PageView');
      console.log("Microsoft Clarity track event triggered");
    } else {
      console.warn("Microsoft Clarity is not available on window");
    }
  };

  router.events.on("routeChangeComplete", handleRouteChange);
  return () => {
    router.events.off("routeChangeComplete", handleRouteChange);
  };
}, [router.events]);


  return (
    <Provider store={store}>
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />

      {isLoading ? <Loader /> : <Navbar isLoading />}

      <Component {...pageProps} />
      <GoogleAnalytics gaId={GTM_ID ?? ""} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
