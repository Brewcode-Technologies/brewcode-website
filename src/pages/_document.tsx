import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
       <Head>
         
       <link rel="preload" href="/images/svg/brewcode_logo_svg.svg" as="image/svg+xml"/>
       <meta name="description" content="Welcome to Brewcode Technology - Solving your critical challenges with innovative solutions." />
          <meta name="author" content="Brewcode Technology" />
          <meta name="keywords" content="Brewcode Technology, innovative solutions, web development, cloud services, cyber security" />
          <meta property="og:title" content="Brewcode Technology" />
          <meta property="og:description" content="Welcome to Brewcode Technology - Solving your critical challenges with innovative solutions." />
         
        </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
