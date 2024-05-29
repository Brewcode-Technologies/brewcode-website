import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "@component/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "../styles/index.css";
import Loader from "@component/components/loader";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Loader/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
