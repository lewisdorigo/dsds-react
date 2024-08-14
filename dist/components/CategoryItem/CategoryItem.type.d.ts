import React from 'react';
import { Component } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';
import { Link } from '../Link/Link.type';
export interface CategoryItem extends React.PropsWithChildren, HasTag, Component<'category-item', HTMLElement> {
    label: React.ReactNode;
    link?: Omit<Link, 'content' | 'children'>;
}
//# sourceMappingURL=CategoryItem.type.d.ts.map