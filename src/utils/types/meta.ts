import type React from 'react';

export interface Label {
    label: React.ReactNode,
    hidden?: boolean,
    review?: React.ReactNode,
}

export type Value = string;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TagName = keyof JSX.IntrinsicElements;

export interface HasTag {
    tag?: TagName,
}
