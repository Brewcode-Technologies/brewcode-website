// types/index.ts
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
  | "vodafone-italia"
  | "case-studies"
  | "our-work"
  | "contact-us"
  | "soctor"
  |"infrastructure"
  |"information-technology"
  |"at-&-t"
  | "ar-vr-development";

  export interface ReusableButtonProps {
    label: string;
    navigateTo: () => void;
  }