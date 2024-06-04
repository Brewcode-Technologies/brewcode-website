import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
       <Head>
         
       <link rel="icon" type="image/svg+xml" href="/images/svg/brewcode_logo_svg.svg" />
       <meta name="description" content="Welcome to Brewcode Technology - Solving your critical challenges with innovative solutions." />
          <meta name="author" content="Brewcode Technology" />
          <meta name="keywords" content="Brewcode Technology, innovative solutions, web development, cloud services, cyber security" />
          <meta property="og:title" content="Brewcode Technology" />
          <meta property="og:description" content="Welcome to Brewcode Technology - Solving your critical challenges with innovative solutions." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/og-image.png" />
          <meta property="og:url" content="https://yourwebsite.com" />
        </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
