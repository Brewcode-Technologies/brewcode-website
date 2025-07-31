import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <Html>
      <Head>
       
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
          <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
