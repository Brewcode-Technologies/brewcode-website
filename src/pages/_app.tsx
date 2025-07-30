import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@component/store";
import { ToastContainer, toast } from 'react-toastify';
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

import Script from "next/script"; // ✅ GTM Script
import { GTM_ID, pageview } from "@component/lib/gtm"; // ✅ GTM ID and pageview

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
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {isLoading ? <Loader /> : <Navbar isLoading />}

      <Component {...pageProps} />
      <GoogleAnalytics gaId={GTM_ID} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
