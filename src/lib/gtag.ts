// src/lib/gtag.ts

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // Add a safety check to ensure gtag is a function before calling it
  if (typeof window.gtag !== 'function') {
    console.warn("Google Analytics not loaded. Skipping pageview.");
    return;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  // Add a safety check here as well
  if (typeof window.gtag !== 'function') {
    console.warn("Google Analytics not loaded. Skipping event.");
    return;
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackProjectClick = (projectTitle: string) => {
  event({
    action: 'view_project',
    category: 'project_link', // More specific category
    label: projectTitle,
    value: 1, // Value is typically a number
  });
};