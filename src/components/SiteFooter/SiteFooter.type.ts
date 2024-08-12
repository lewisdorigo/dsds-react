import type React from 'react';
import { Link } from '../Link/Link.type';

export interface SiteFooterLinks {
    menuItems?: Link[],
}

export interface SiteFooterLogo extends React.HTMLProps<HTMLImageElement> {
    link?: string,
}

export interface SiteFooterCopyright {
    logo?: SiteFooterLogo,
    content: React.ReactNode,
}

export interface SiteFooterOrganisation {
    logo: SiteFooterLogo,
}

export interface SiteFooter extends React.HTMLProps<HTMLDivElement> {
    menuItems?: Link[],
    copyright?: SiteFooterCopyright,
    organisation?: SiteFooterOrganisation,
    className?: string,
    'aria-label'?: string,
}
