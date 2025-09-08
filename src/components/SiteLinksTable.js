export default function SimpleSitemap() {
  const links = [
    { 
      name: "Home", 
      description: "Welcome to Brewcode", 
      url: "/" 
    },
    { 
      name: "About Us", 
      description: "Learn more about Brewcode", 
      url: "/about-us" 
    },
    { 
      name: "Services", 
      description: "Explore our services", 
      url: "/services" 
    },
    { 
      name: "Case Studies", 
      description: "See our projects and results", 
      url: "/case-studies" 
    },
    { 
      name: "Insights", 
      description: "Read our latest articles", 
      url: "/insights" 
    },
    { 
      name: "Contact", 
      description: "Get in touch with us", 
      url: "/contact-us" 
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Sitemap</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <tbody>
          {links.map((link, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", fontWeight: "500", width: "30%" }}>
                {link.name}
              </td>
              <td style={{ padding: "10px", width: "50%", color: "#555" }}>
                {link.description}
              </td>
              <td style={{ padding: "10px", textAlign: "right", width: "20%" }}>
                <a
                  href={link.url}
                  style={{
                    textDecoration: "none",
                    color: "#1a0dab",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  Visit <span style={{ marginLeft: "5px" }}>→</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
