import Head from "next/head";

type SeoProps = {
  title?: string;                 // Page title only (we’ll add suffix)
  description?: string;
  canonicalPath?: string;         // e.g. "/about-us"
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://brewcode.co";
const TITLE_SUFFIX = " | Brewcode";

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage = `${SITE_URL}/images/og-image.jpg`,
  jsonLd
}: SeoProps) {
  const fullTitle = title ? `${title}${TITLE_SUFFIX}` : "Brewcode Technology Private Limited";
  const canonical = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
      )}
    </Head>
  );
}
