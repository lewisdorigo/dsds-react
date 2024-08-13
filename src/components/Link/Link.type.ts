import type React from 'react';
import { Type } from '../Button/Button.type';

interface BaseLink {
    content?: React.ReactNode,
    baseClass?: string,
    tabText?: boolean | string,
    className?: string,
}

interface AnchorLink extends BaseLink, Omit<
    React.HTMLProps<HTMLAnchorElement>,
    'content'
> {
    href: string,
    target?: undefined | '_blank' | '_new' | '_self',
    type?: never,
}

interface ButtonLink extends BaseLink, Omit<
    React.HTMLProps<HTMLButtonElement>,
    'content'
> {
    type?: Type,
}

export type Link = AnchorLink | ButtonLink;
