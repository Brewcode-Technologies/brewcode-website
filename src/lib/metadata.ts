import { Metadata } from "next";

const SITE_URL = "https://www.brewcode.co";

// Base metadata template
const createMetadata = (
  title: string,
  description: string,
  path: string = "/",
  keywords?: string,
  images?: { url: string; width: number; height: number; alt: string }[]
): Metadata => ({
  title: {
    default: "Brewcode Technology Private Limited",
    template: `%s | Brewcode`
  },
  description,
  keywords,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    siteName: "Brewcode",
    images: images || [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: images?.[0]?.url || `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}${path}`,
    languages: {
      "en-US": `${SITE_URL}${path}`,
      "x-default": `${SITE_URL}${path}`,
    },
  },
});

// Page-specific metadata
export const pageMetadata = {
  // Home page
  home: {
    ...createMetadata(
      "Brewcode Technology Pvt ltd",
      "Brewcode helps you build and deploy modern web applications faster with cutting-edge technology solutions.",
      "/",
      "software development, web development, mobile app development, full stack development, IT solutions, technology consulting, digital transformation, custom software, enterprise applications, cloud services"
    ),
    verification: {
      google: "OC7hkket6YUB2PvM38NBIOOODQntIzTmDbscySISoUI",
    },
  },

  // About Us
  aboutUs: createMetadata(
    "About Brewcode | Our Mission & Team",
    "Learn about Brewcode's mission, values, and team delivering innovative software solutions across BFSI, Retail, and Healthcare domains.",
    "/about-us",
    "about brewcode, software company, IT consulting, technology team, mission vision, BFSI solutions, retail technology, healthcare IT, Bidar Karnataka, global presence"
  ),

  // Contact Us
  contactUs: createMetadata(
    "Contact Brewcode | Let's Work Together",
    "Get in touch with Brewcode for your software development, web design, and IT solutions needs. Offices in Hyderabad and Bangalore.",
    "/contact-us",
    "contact brewcode, software development company, IT consulting services, Hyderabad office, Bangalore office, get quote, project inquiry, technology solutions"
  ),

  // Services
  services: {
    webDevelopment: {
      ...createMetadata(
        "Web Development Solutions | Brewcode",
        "Brewcode provides cutting-edge web development solutions, building responsive, scalable, and secure websites tailored to your business needs.",
        "/services/web-development",
        "web development, responsive web design, website development, frontend development, backend development, React development, Node.js, custom websites, e-commerce websites, CMS development"
      ),
      verification: {
        google: "OC7hkket6YUB2PvM38NBIOOODQntIzTmDbscySISoUI",
      },
    },

    fullStackDevelopment: createMetadata(
      "Full Stack Development Services | Brewcode",
      "Comprehensive full-stack development services covering frontend, backend, databases, APIs, and DevOps to accelerate your business growth.",
      "/services/full-stack-development",
      "full stack development, MEAN stack, MERN stack, frontend backend development, API development, database design, DevOps services, microservices, scalable applications"
    ),

    arVrDevelopment: createMetadata(
      "AR/VR Development Services | Brewcode",
      "Transform your business with immersive AR/VR experiences. Custom augmented and virtual reality solutions for various industries.",
      "/services/ar-vr-development",
      "AR VR development, augmented reality, virtual reality, Unity development, Unreal Engine, ARKit, ARCore, immersive experiences, 3D applications, VR training"
    ),

    cloudServices: createMetadata(
      "Cloud Services & Solutions | Brewcode",
      "Scalable cloud infrastructure solutions including IaaS, PaaS, and SaaS to optimize your business operations and reduce costs.",
      "/services/cloud-services",
      "cloud services, AWS, Azure, Google Cloud, cloud migration, IaaS, PaaS, SaaS, cloud infrastructure, serverless computing, cloud security"
    ),

    cyberSecurity: createMetadata(
      "Cyber Security Solutions | Brewcode",
      "Comprehensive cybersecurity services to protect your digital assets with advanced threat detection and security frameworks.",
      "/services/cyber-security",
      "cybersecurity, network security, endpoint security, threat detection, security audit, penetration testing, data protection, security compliance, incident response"
    ),

    digitalAssurance: createMetadata(
      "Digital Assurance & Testing | Brewcode",
      "Quality assurance and testing services ensuring your applications meet the highest standards of performance and reliability.",
      "/services/digital-assurance",
      "digital assurance, software testing, QA services, test automation, performance testing, security testing, mobile testing, API testing, quality engineering"
    ),

    eCommerce: createMetadata(
      "E-Commerce Development | Brewcode",
      "Custom e-commerce solutions to boost your online business with secure, scalable, and user-friendly platforms.",
      "/services/e-commerce",
      "ecommerce development, online store, shopping cart, payment gateway, Shopify, WooCommerce, Magento, B2B ecommerce, B2C ecommerce, mobile commerce"
    ),

    enterpriseApplication: createMetadata(
      "Enterprise Application Development | Brewcode",
      "Scalable enterprise applications designed to streamline your business processes and enhance operational efficiency.",
      "/services/enterprise-application-development",
      "enterprise applications, business process automation, ERP systems, CRM development, workflow management, enterprise software, legacy modernization, system integration"
    ),

    infrastructure: createMetadata(
      "IT Infrastructure Services | Brewcode",
      "Robust IT infrastructure solutions to support your business growth with reliable, secure, and scalable technology foundations.",
      "/services/infrastructure",
      "IT infrastructure, server management, network setup, data center, cloud infrastructure, system administration, infrastructure monitoring, disaster recovery"
    ),

    resourcePlanning: createMetadata(
      "Resource Planning Solutions | Brewcode",
      "Optimize your business resources with intelligent planning and management systems for enhanced productivity.",
      "/services/resource-planning",
      "resource planning, ERP solutions, project management, resource allocation, workforce management, capacity planning, business intelligence, analytics"
    ),

    roboticProcessAutomation: createMetadata(
      "Robotic Process Automation | Brewcode",
      "Automate repetitive tasks and boost productivity with RPA solutions that drive cost savings and operational excellence.",
      "/services/robotic-process-automation",
      "RPA, robotic process automation, business process automation, workflow automation, UiPath, Blue Prism, Automation Anywhere, intelligent automation, bot development"
    ),

    uxUiDesigning: createMetadata(
      "UX/UI Design Services | Brewcode",
      "Create exceptional user experiences with our professional UX/UI design services focused on usability and conversion.",
      "/services/ux-ui-designing",
      "UX UI design, user experience design, user interface design, mobile app design, web design, prototyping, wireframing, design thinking, usability testing"
    ),
  },

  // Industries
  industries: {
    automotive: createMetadata(
      "Automotive Industry Solutions | Brewcode",
      "Digital transformation solutions for the automotive industry including connected vehicles, IoT, and smart manufacturing.",
      "/industries/automotive",
      "automotive software, connected vehicles, IoT automotive, smart manufacturing, telematics, automotive IoT, vehicle tracking, fleet management, automotive technology"
    ),

    banking: createMetadata(
      "Banking & Financial Services | Brewcode",
      "Secure and compliant digital solutions for banking and financial institutions with focus on customer experience.",
      "/industries/banking",
      "banking software, fintech solutions, digital banking, mobile banking, payment systems, financial technology, BFSI, core banking, regulatory compliance"
    ),

    eCommerceIndustry: createMetadata(
      "E-Commerce Industry Solutions | Brewcode",
      "Comprehensive e-commerce solutions to enhance online retail experiences and drive business growth.",
      "/industries/e-commerce-industry",
      "ecommerce industry, retail technology, online marketplace, digital commerce, omnichannel retail, inventory management, order management, customer analytics"
    ),

    education: createMetadata(
      "Education Technology Solutions | Brewcode",
      "Innovative EdTech solutions to transform learning experiences with digital platforms and interactive tools.",
      "/industries/education",
      "education technology, EdTech, e-learning platforms, LMS, online education, digital classroom, educational apps, student management system, virtual learning"
    ),

    healthcare: createMetadata(
      "Healthcare Technology Solutions | Brewcode",
      "Digital healthcare solutions improving patient care and operational efficiency with secure, compliant systems.",
      "/industries/healthcare",
      "healthcare technology, medical software, telemedicine, EHR systems, patient management, healthcare apps, HIPAA compliance, digital health, medical devices"
    ),

    logistic: createMetadata(
      "Logistics & Supply Chain Solutions | Brewcode",
      "Optimize your logistics operations with smart supply chain management and tracking solutions.",
      "/industries/logistic",
      "logistics software, supply chain management, warehouse management, transportation management, fleet tracking, inventory optimization, logistics automation"
    ),

    tourism: createMetadata(
      "Tourism Industry Solutions | Brewcode",
      "Digital solutions for the tourism industry including booking platforms, mobile apps, and customer engagement tools.",
      "/industries/tourism-industry",
      "tourism technology, travel booking, hotel management, tour operator software, travel apps, booking engine, hospitality technology, travel portal"
    ),
  },

  // Case Studies
  caseStudies: {
    main: createMetadata(
      "Case Studies | Brewcode Success Stories",
      "Explore our successful projects and client transformations across various industries and technologies.",
      "/case-studies",
      "case studies, success stories, client projects, software development projects, digital transformation, project portfolio, client testimonials"
    ),

    atT: createMetadata(
      "AT&T Case Study | Brewcode",
      "How Brewcode helped AT&T develop innovative collaboration solutions for enhanced business communication.",
      "/case-studies/at-t",
      "AT&T case study, collaboration app, enterprise communication, video conferencing, business communication, telecommunications, agile development"
    ),

    brewcodeMeet: createMetadata(
      "Brewcode Meet Case Study | Video Conferencing Platform",
      "Enterprise meeting platform development showcasing scalable video conferencing solutions.",
      "/case-studies/brewcode-meet",
      "video conferencing, meeting platform, enterprise communication, virtual meetings, collaboration tools, scalable platform, real-time communication"
    ),

    dhanikaSolutions: createMetadata(
      "Dhanika Solutions Case Study | Brewcode",
      "Digital transformation project delivering comprehensive business solutions for Dhanika Solutions.",
      "/case-studies/dhanika-solutions",
      "digital transformation, business solutions, enterprise software, custom development, system integration, business automation"
    ),

    soctor: createMetadata(
      "Soctor Healthcare App Case Study | Brewcode",
      "Revolutionary healthcare application development providing personalized medical advice and telemedicine solutions.",
      "/case-studies/soctor",
      "healthcare app, telemedicine, medical advice, healthcare technology, patient care, mobile health, digital health, medical consultation"
    ),

    stJude: createMetadata(
      "St. Jude India Case Study | Brewcode",
      "Healthcare technology solutions for St. Jude India supporting child care and medical services.",
      "/case-studies/st-jude",
      "St. Jude India, healthcare NGO, child care, donation platform, WordPress development, payment gateway, CCAvenue, digital transformation"
    ),

    universitiMalaya: createMetadata(
      "Universiti Malaya VR Case Study | Brewcode",
      "Innovative VR application development for educational institutions enhancing learning experiences.",
      "/case-studies/universiti-malaya",
      "VR education, virtual reality learning, educational VR, university technology, immersive learning, VR applications, educational innovation"
    ),

    vodafoneIdea: createMetadata(
      "Vodafone Idea Case Study | Brewcode",
      "Telecommunications solutions development for Vodafone Idea improving customer engagement and services.",
      "/case-studies/vodafone-idea",
      "Vodafone Idea, telecommunications, telecom solutions, customer engagement, mobile services, telecom technology, network solutions"
    ),
  },

  // Other pages
  insights: createMetadata(
    "Insights & Blog | Brewcode",
    "Stay updated with the latest technology trends, insights, and best practices from Brewcode's expert team.",
    "/insights",
    "technology blog, tech insights, software development trends, IT industry news, programming tutorials, technology articles, best practices"
  ),

  privacyPolicy: createMetadata(
    "Privacy Policy | Brewcode",
    "Learn about Brewcode's privacy policy and how we protect your personal information and data.",
    "/privacy-policy",
    "privacy policy, data protection, personal information, GDPR compliance, data security, privacy rights"
  ),

  termsConditions: createMetadata(
    "Terms & Conditions | Brewcode",
    "Read Brewcode's terms and conditions for using our services and website.",
    "/terms-conditions",
    "terms and conditions, service agreement, terms of use, legal terms, service terms, website terms"
  ),

  cookiePolicy: createMetadata(
    "Cookie Policy | Brewcode",
    "Understand how Brewcode uses cookies to enhance your browsing experience and website functionality.",
    "/cookie-policy",
    "cookie policy, website cookies, tracking cookies, browser cookies, cookie consent, data collection"
  ),
};

export default pageMetadata;