import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import { store } from "@component/store";
import "bootstrap/dist/js/bootstrap";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
