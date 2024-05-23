import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { store } from "@component/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("bootstrap/dist/js/bootstrap")
  //       .then((bootstrap) => {})
  //       .catch((error) => {
  //         console.error("Error loading Bootstrap:", error);
  //       });
  //   }
  // }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
