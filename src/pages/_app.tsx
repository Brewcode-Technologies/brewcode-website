import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@component/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "../styles/index.css";
import Loader from "@component/components/Loader";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
       <Loader/>
      <Component {...pageProps} />
   
    </Provider>
  );
}

export default MyApp;
