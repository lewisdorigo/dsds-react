import type React from 'react';
import type { WrapperTag } from '../../components/WrapperTag/WrapperTag.type';
export declare enum Type {
    Article = "article",
    CategoryList = "category-list",
    Guide = "guide",
    SearchResults = "search-results",
    SeachResultsWithFilters = "search-results--filters",
    Questions = "question-page"
}
export interface Layout extends Omit<WrapperTag, 'content'> {
    layout?: Type;
    header?: React.ReactNode;
    partner?: React.ReactNode;
    navigation?: React.ReactNode;
    content?: React.ReactNode;
    list?: React.ReactNode;
    grid?: React.ReactNode;
    footer?: React.ReactNode;
    sidebar?: React.ReactNode;
    feedback?: React.ReactNode;
    hasHidePage?: boolean;
}
//# sourceMappingURL=Layout.type.d.ts.map