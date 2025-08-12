import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface GoogleAnalyticsProps {
  gaId: string;
}

// Extend Window type without conflicting with existing global types
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ gaId }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', gaId, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, gaId]);

  useEffect(() => {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        (window.dataLayer as unknown[]).push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', gaId);
    }
  }, [gaId]);

  return null;
};

export default GoogleAnalytics;
