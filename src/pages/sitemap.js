import Head from "next/head";

export default function Sitemap({ links }) {
  const siteUrl = "https://www.brewcode.co";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteUrl + "/#organization",
        "name": "Brewcode",
        "url": siteUrl,
        "logo": siteUrl + "/logo.png",
        "sameAs": [
          "https://linkedin.com/company/brewcode",
          "https://twitter.com/brewcode"
        ]
      },
      {
        "@type": "WebSite",
        "@id": siteUrl + "/#website",
        "url": siteUrl,
        "name": "Brewcode",
        "description": "Software development and technology solutions",
        "publisher": {
          "@id": siteUrl + "/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": siteUrl + "/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": siteUrl + "/#sitelinks",
        "name": "Brewcode Main Pages",
        "description": "Primary navigation pages for Brewcode website",
        "numberOfItems": links.length,
        "itemListElement": links.map((link, index) => ({
          "@type": "SiteNavigationElement",
          "position": index + 1,
          "name": link.name,
          "description": link.description,
          "url": siteUrl + link.url
        }))
      }
    ]
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Head>
        <title>Sitemap | Brewcode</title>
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <h1>Sitemap</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {links.map((link, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", fontWeight: "500" }}>{link.name}</td>
              <td style={{ padding: "10px", color: "#555" }}>{link.description}</td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                <a href={link.url} style={{ color: "#1a0dab", textDecoration: "none" }}>
                  Visit →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const links = [
    { name: "About Us", url: "/about-us", description: "Learn about our team and mission" },
    { name: "Solutions", url: "/solutions", description: "Explore our technology solutions" },
    { name: "Case Studies", url: "/case-studies", description: "View our project case studies" },
    { name: "Insights", url: "/insights", description: "Read our latest insights and articles" },
    { name: "Contact Us", url: "/contact-us", description: "Get in touch with our team" }
  ];

  return { props: { links } };
}


