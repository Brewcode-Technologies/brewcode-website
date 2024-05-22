import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "@component/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "../styles/index.css";

async function importBootstrap() {
  if (typeof window !== "undefined") {
    await import("bootstrap/dist/js/bootstrap");
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    importBootstrap();
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
