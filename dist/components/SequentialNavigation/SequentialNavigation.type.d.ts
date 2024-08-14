import React from 'react';
import { Component, ComponentItem } from '../../utils/types';
import { Link } from '../Link/Link.type';
export interface SequentialNavigationItem extends ComponentItem<HTMLDivElement> {
    type?: 'next' | 'previous';
    link: Omit<Link, 'content'>;
    label: React.ReactNode;
}
export interface SequentialNavigation extends Omit<Component<'sequential-navigation', HTMLDivElement, SequentialNavigationItem>, 'label' | 'content'> {
}
//# sourceMappingURL=SequentialNavigation.type.d.ts.map