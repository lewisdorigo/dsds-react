import type React from 'react';

export interface SiteBranding {
    siteName: string,
    logo: string,
    smallLogo?: string,
    title?: React.ReactNode,
}
