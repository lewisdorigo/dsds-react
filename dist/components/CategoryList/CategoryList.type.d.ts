import { Component } from '../../utils/types';
import { Card } from '../Card/Card.type';
import { CategoryItem } from '../CategoryItem/CategoryItem.type';
import type { HasTag } from '../../utils/types/meta';
export declare enum CategoryListLayout {
    List = "list",
    Grid = "grid"
}
export declare enum CategoryListSpacing {
    Narrow = "narrow"
}
export interface CategoryList extends HasTag, Omit<Component<'category-list' | 'category-grid' | 'card-list' | 'card-grid', HTMLElement, CategoryItem | Card>, 'label' | 'content'> {
    layout?: CategoryListLayout;
    spacing?: CategoryListSpacing;
}
//# sourceMappingURL=CategoryList.type.d.ts.map