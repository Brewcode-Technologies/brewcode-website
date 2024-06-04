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
  "enterprise-application-development":"/services/enterprise-application-development",
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
  "information-technology":"/case-studies/information-technology",
  "soctor-healthcare": "/case-studies/soctor-healthcare",
  "digital-transformation": "/case-studies/digital-transformation",
  "dhanika-solutions": "/case-studies/dhanika-solutions",
  "brewcode-meet": "/case-studies/brewcode-meet",
  "vodafone-ialia-collaborate-app": "/case-studies/vodafone-ialia-collaborate-app",
  "universiti-malaya": "/case-studies/universiti-malaya",
  "soctor": "/case-studies/soctor",
  "case-studies": "/case-studies",
  "ar-vr-development": "/services/ar-vr-development",
  "at-t":"/case-studies/at-t",
  "contact-us": "/contact-us",
  industries:"/industries",
  "about-us":"about-us",
  "automotive":"/industries/automotive",
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

  return { navigate };
};

export default useNavigation;
