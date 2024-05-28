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
  "enterprise-application-development":
    "/services/enterprise-application-development",
  "resource-planning": "/services/resource-planning",
  infrastructure: "/services/infrastructure",
  "robotic-process-automation": "/services/robotic-process-automation",
  "full-stack-development": "/services/full-stack-development",
  "digital-assurance": "/services/digital-assurance",
  "web-development": "/services/web-development",
  "ux-ui-designing": "/services/ux-ui-designing",
  automotive: "/services/automotive",
  banking: "/services/banking",
  "capital-markets": "/services/capital-markets",
  "communication-media": "/services/communication-media",
  health: "/services/health",
  "high-tech": "/services/high-tech",
  "vr-application": "/case-studies/vr-application",
  "soctor-healthcare": "/case-studies/soctor-healthcare",
  "digital-transformation": "/case-studies/digital-transformation",
  "dhanika-solutions": "/case-studies/dhanika-solutions",
  "brewcode-meet": "/case-studies/brewcode-meet",
  "vodafone-italia": "/case-studies/vodafone-italia",
  "case-studies": "/case-studies",
  "ar-vr-development": "/services/ar-vr-development",
  "contact-us": "/contact-us",
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
