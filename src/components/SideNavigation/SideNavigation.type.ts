import { Component } from '../../utils/types';
import { Link } from '../Link/Link.type';

export interface SideNavigationList {
    id: string,
    level?: number,
    items: SideNavigationItem[],
}

export type SideNavigationItem = Link & {
    href?: string,
    items?: SideNavigationItem[],
    current?: boolean,
}

export interface SideNavigation extends Omit<
    Component<
        'side-navigation',
        HTMLDivElement
    >,
    'content' | 'items'
> {
    items?: SideNavigationItem[],
}
