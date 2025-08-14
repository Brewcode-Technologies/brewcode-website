module.exports = {
  siteUrl: 'https://www.brewcode.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Boost priority for key pages
    if ([
      '/', 
      '/about-us', 
      '/contact-us', 
      '/services/web-development', 
      '/services/full-stack-development'
    ].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Lower for blogs/articles
    if (path.startsWith('/insights')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      };
    }

    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
