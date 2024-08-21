import { Component } from '../../utils/types';
import { Card } from '../Card/Card.type';
import { CategoryItem } from '../CategoryItem/CategoryItem.type';
import type { HasTag } from '../../utils/types/meta';
export declare enum Layout {
    List = "list",
    Grid = "grid"
}
export declare enum Spacing {
    Narrow = "narrow"
}
export interface CategoryList extends HasTag, Omit<Component<'category-list' | 'category-grid' | 'card-list' | 'card-grid', HTMLElement, CategoryItem | Card>, 'label' | 'content'> {
    layout?: Layout;
    spacing?: Spacing;
}
//# sourceMappingURL=CategoryList.type.d.ts.map