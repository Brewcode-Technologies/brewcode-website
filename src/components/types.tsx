export type Route = 
  | "/"
  | "login"
  | "career"
  | "our-work"
  | "insights"
  | "who-we-are"
  | "services"
  |"automotive"
  | "e-commerce"
  | "cloud-services"
  | "cyber-security"
  | "enterprise-application-development"
  | "resource-planning"
  | "infrastructure"
  | "robotic-process-automation"
  | "full-stack-development"
  | "digital-assurance"
  | "web-development"
  | "ux-ui-designing"
  | "banking"
  | "capital-markets"
  | "communication-media"
  | "high-tech"
  | "vr-application"
  | "amul-supply-chain"
  | "fabIndia-supply-chain"
  | "information-technology"
  | "soctor-healthcare"
  | "st-jude"
  | "dhanika-solutions"
  | "brewcode-meet"
  | "universiti-malaya"
  | "soctor"
  | "case-studies"
  | "ar-vr-development"
  | "at-t"
  | "contact-us"
  | "industries"
  | "cookie-policy"
  | "privacy-policy"
  | "terms-of-services"
  | "vodafone-idea"
  | "education"
  | "hospitality-industry"
  | "logistic"
  | "e-commerce-industry"
  | "tourism-industry"
  | "healthcare";

  export interface CaseStudy {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    colImageUrl: string;
    colImageName: string;
    read: string;
    size: "small" | "medium" | "large";
  }
  export interface ReusableButtonProps {
    label: string;
    navigateTo: () => void;
  }