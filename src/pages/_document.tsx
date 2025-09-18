import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href="https://www.brewcode.co" />
        <link rel="icon" href="/favicon.svg" sizes="any" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="We solve critical challenges with solutions in Cloud Security, Cyber Security, E-commerce, Software Development, and Robotic Process Automation."
        />
        <meta
          name="keywords"
          content="Brewcode, Cloud Security, Cyber Security, E-commerce Solutions, Software Development, RPA, IT Services"
        />
        <meta name="author" content="Brewcode Team" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brewcode.co" />
        <meta property="og:title" content="Brewcode Technology Private Limited" />
        <meta
          property="og:description"
          content="Your trusted partner for Cloud Security, Cyber Security, E-commerce, and RPA solutions."
        />
        <meta property="og:image" content="https://www.brewcode.co/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@brewcode" />
        <meta name="twitter:title" content="Brewcode Technology Private Limited" />
        <meta
          name="twitter:description"
          content="We solve critical challenges with expertise in cloud security, cyber security, and more."
        />
        <meta name="twitter:image" content="https://brewcode.co/images/og-image.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Brewcode Technology Private Limited',
              url: 'https://www.brewcode.co',
              logo: 'https://www.brewcode.co/images/logo.png',
              sameAs: ['https://www.linkedin.com/company/brewcode', 'https://twitter.com/brewcode'],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-XXXXXXXXXX',
                contactType: 'Customer Support',
                areaServed: 'IN',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.brewcode.co/?s={search_term_string}',
                'query-input': 'required name=search_term_string'
              },
              mainEntity: [
                {
                  '@type': 'WebPage',
                  name: 'About Us',
                  url: 'https://www.brewcode.co/about-us'
                },
                {
                  '@type': 'WebPage',
                  name: 'Case Studies',
                  url: 'https://www.brewcode.co/case-studies'
                },
                {
                  '@type': 'WebPage',
                  name: 'Insights',
                  url: 'https://www.brewcode.co/insights'
                },
                {
                  '@type': 'WebPage',
                  name: 'Contact Us',
                  url: 'https://www.brewcode.co/contact-us'
                }
              ]
            }),
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
