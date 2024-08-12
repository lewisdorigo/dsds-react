import type React from 'react';
import { Link } from '../Link/Link.type';

export interface SiteNavigation extends React.HTMLProps<HTMLDivElement> {
    id?: string,
    className?: string,
    'aria-label'?: string,
    mobile?: boolean,
    menuItems: Link[],
}
