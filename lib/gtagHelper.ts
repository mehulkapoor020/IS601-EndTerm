import ReactGA from "react-ga4";

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const useAnalyticsEventTracker = (category: string, action: string, label: string) => {
  console.log('Tracked ', category, action, label);
  ReactGA.event({ category, action, label })
};
