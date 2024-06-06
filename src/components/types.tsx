
export type Route =
  | "/"
  | "login"
  | "career"
  | "insights"
  | "who-we-are"
  | "services"
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
  | "automotive"
  | "banking"
  | "capital-markets"
  | "communication-media"
  | "health"
  | "high-tech"
  | "vr-application"
  | "soctor-healthcare"
  | "digital-transformation"
  | "dhanika-solutions"
  | "brewcode-meet"
  | "vodafone-ialia-collaborate-app"
  | "case-studies"
  | "our-work"
  | "contact-us"
  | "soctor"
  | "infrastructure"
  | "information-technology"
  | "at-t"
  | "universiti-malaya"
  |"resource-planning"
  |"industries"
  |"automotive"
  |"about-us"
  |"cookie-policy"
  |"privacy-policy"
  |"terms-of-services"
  | "ar-vr-development";

export interface ReusableButtonProps {
  label: string;
  navigateTo: () => void;
}


export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  read: string;
  colImageUrl: string;
  colImageName: string;
  size: "small" | "medium" | "large";
}