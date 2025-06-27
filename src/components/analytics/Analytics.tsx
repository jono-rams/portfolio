"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/gtag';

export default function GAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Trigger a pageview event whenever the pathname changes
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null; // This component does not render anything
}