import type React from 'react';
import { Link } from '../Link/Link.type';
import { SiteBranding } from '../SiteBranding/SiteBranding.type';
import { PhaseBanner } from '../PhaseBanner/PhaseBanner.type';

export interface SiteHeader extends React.HTMLProps<HTMLDivElement> {
    className?: string,
    'aria-label'?: string,

    branding: SiteBranding,
    phase?: PhaseBanner,
    menuItems?: Link[],
}
