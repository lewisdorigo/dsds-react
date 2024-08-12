import type React from 'react';

export interface SkipLinksItem {
    href: string,
    label: string,
}

export interface SkipLinks extends React.HTMLProps<HTMLDivElement> {
    mainContent?: string,
    items?: SkipLinksItem[],
}
