import { Component } from '../../utils/types';
import { Card } from '../Card/Card.type';
import { CategoryItem } from '../CategoryItem/CategoryItem.type';
import type { HasTag } from '../../utils/types/meta';

export enum CategoryListLayout {
    List = 'list',
    Grid = 'grid',
}

export enum CategoryListSpacing {
    Narrow = 'narrow'
}

export interface CategoryList extends HasTag, Omit<
    Component<
        'category-list' | 'category-grid' | 'card-list' | 'card-grid',
        HTMLElement,
        CategoryItem | Card
    >,
    'label' | 'content'
> {
    layout?: CategoryListLayout,
    spacing?: CategoryListSpacing,
}
