import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
