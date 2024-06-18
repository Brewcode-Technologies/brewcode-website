import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@component/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "../styles/index.css";
import Loader from "@component/components/Loader";
import GoogleAnalytics from "@component/components/GoogleAnalytics"; 
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Provider store={store}>
      <Loader />
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-59FC9R45R5" />
    </Provider>
  );
}

export default MyApp;
