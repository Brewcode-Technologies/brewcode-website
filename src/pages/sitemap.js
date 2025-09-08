import fs from "fs";
import path from "path";
import Head from "next/head";

export default function Sitemap({ links }) {
  const siteUrl = "https://www.brewcode.co";

  const siteNavigationJSON = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": "Brewcode",
    "mainEntity": links.map(link => ({
      "@type": "SiteNavigationElement",
      "name": link.name,
      "url": siteUrl + link.url
    }))
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Head>
        <title>Sitemap | Brewcode</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJSON) }}
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
  const pagesDir = path.join(process.cwd(), "src", "pages"); // 👈 FIXED
  const files = fs.readdirSync(pagesDir);

  // Filter out Next.js special files
  const ignore = ["_app.js", "_document.js", "_error.js", "api", "sitemap.js"];
  
  const links = files
    .filter(file => !ignore.includes(file))
    .map(file => {
      const name = file
        .replace(".js", "")
        .replace("-", " ")
        .replace(/^\w/, c => c.toUpperCase());
      const url = "/" + file.replace(".js", "");
      const description = `Visit our ${name} page`;
      return { name, url, description };
    });

  return { props: { links } };
}


