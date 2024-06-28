import { useRouter } from "next/router";
import { Route } from "../types";

export const routeMap: Record<Route, string> = {
  "/": "/",
  login: "/login",
  career: "/career",
  "our-work": "/our-work",
  insights: "/insights",
  "who-we-are": "/who-we-are",
  services: "/services",
  "e-commerce": "/services/e-commerce",
  "cloud-services": "/services/cloud-services",
  "cyber-security": "/services/cyber-security",
  "enterprise-application-development": "/services/enterprise-application-development",
  "resource-planning": "/services/resource-planning",
  infrastructure: "/services/infrastructure",
  "robotic-process-automation": "/services/robotic-process-automation",
  "full-stack-development": "/services/full-stack-development",
  "digital-assurance": "/services/digital-assurance",
  "web-development": "/services/web-development",
  "ux-ui-designing": "/services/ux-ui-designing",
  banking: "/industries/banking",
  "capital-markets": "/industries/capital-markets",
  "communication-media": "/industries/communication-media",
  health: "/industries/health",
  "high-tech": "/industries/high-tech",
  "vr-application": "/case-studies/vr-application",
  "information-technology": "/case-studies/information-technology",
  "soctor-healthcare": "/case-studies/soctor-healthcare",
  "st-jude": "/case-studies/st-jude",
  "dhanika-solutions": "/case-studies/dhanika-solutions",
  "brewcode-meet": "/case-studies/brewcode-meet",
  "universiti-malaya": "/case-studies/universiti-malaya",
  soctor: "/case-studies/soctor",
  "case-studies": "/case-studies",
  "ar-vr-development": "/services/ar-vr-development",
  "at-t": "/case-studies/at-t",
  "contact-us": "/contact-us",
  industries: "/industries",
  "cookie-policy": "/cookie-policy",
  "privacy-policy": "/privacy-policy",
  "terms-of-services": "/terms-of-services",
  "vodafone-idea": "/case-studies/vodafone-idea",
  education: "/industries/education",
  "hospitality-industry": "/industries/hospitality-industry",
  logistic: "/industries/logistic",
  "e-commerce-industry": "/industries/e-commerce-industry",
  "tourism-industry": "/industries/tourism-industry",
  healthcare: "/industries/healthcare",
};

const useNavigation = () => {
  const router = useRouter();

  const navigate = (route: Route) => {
    const path = routeMap[route];
    if (path) {
      router.push(path);
    } else {
      console.error(`Invalid route: ${route}`);
    }
  };

  const navigateToButtonUrl = (buttonUrl: string) => {
    const route = buttonUrl as Route;
    if (route in routeMap) {
      router.push(routeMap[route]);
    } else {
      console.error(`Invalid button URL: ${buttonUrl}`);
    }
  };

  return { navigate, navigateToButtonUrl };
};

export default useNavigation;
