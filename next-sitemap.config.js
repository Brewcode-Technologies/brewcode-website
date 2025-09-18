module.exports = {
  siteUrl: 'https://www.brewcode.co',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/product', '/product/*', '/register', '/register/*'],
  additionalPaths: async (config) => {
    const staticPaths = [
      // Main pages
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/about-us', priority: 0.9, changefreq: 'monthly' },
      { loc: '/contact-us', priority: 0.9, changefreq: 'monthly' },
      
      // Services
      { loc: '/services/web-development', priority: 1.0, changefreq: 'weekly' },
      { loc: '/services/full-stack-development', priority: 1.0, changefreq: 'weekly' },
      { loc: '/services/ar-vr-development', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/cloud-services', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/cyber-security', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/digital-assurance', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/e-commerce', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/enterprise-application-development', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/infrastructure', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/resource-planning', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/robotic-process-automation', priority: 0.8, changefreq: 'weekly' },
      { loc: '/services/ux-ui-designing', priority: 0.8, changefreq: 'weekly' },
      
      // Industries
      { loc: '/industries/automotive', priority: 0.7, changefreq: 'monthly' },
      { loc: '/industries/banking', priority: 0.7, changefreq: 'monthly' },
      { loc: '/industries/e-commerce-industry', priority: 0.7, changefreq: 'monthly' },
      { loc: '/industries/education', priority: 0.7, changefreq: 'monthly' },
      { loc: '/industries/healthcare', priority: 0.7, changefreq: 'monthly' },
      { loc: '/industries/logistic', priority: 0.7, changefreq: 'monthly' },
      { loc: '/industries/tourism-industry', priority: 0.7, changefreq: 'monthly' },
      
      // Case Studies
      { loc: '/case-studies', priority: 0.8, changefreq: 'monthly' },
      { loc: '/case-studies/at-t', priority: 0.6, changefreq: 'monthly' },
      { loc: '/case-studies/brewcode-meet', priority: 0.6, changefreq: 'monthly' },
      { loc: '/case-studies/dhanika-solutions', priority: 0.6, changefreq: 'monthly' },
      { loc: '/case-studies/soctor', priority: 0.6, changefreq: 'monthly' },
      { loc: '/case-studies/st-jude', priority: 0.6, changefreq: 'monthly' },
      { loc: '/case-studies/universiti-malaya', priority: 0.6, changefreq: 'monthly' },
      { loc: '/case-studies/vodafone-idea', priority: 0.6, changefreq: 'monthly' },
      
      // Other pages
      { loc: '/insights', priority: 0.7, changefreq: 'weekly' },
      { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
      { loc: '/terms-conditions', priority: 0.3, changefreq: 'yearly' },
      { loc: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
    ];
    
    return staticPaths.map(path => ({
      loc: path.loc,
      priority: path.priority,
      changefreq: path.changefreq,
      lastmod: new Date().toISOString(),
    }));
  },
};
