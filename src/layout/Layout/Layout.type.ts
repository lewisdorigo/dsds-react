import type React from 'react';

import type { WrapperTag } from '../../components/WrapperTag/WrapperTag.type';

export enum LayoutTypes {
    Article = 'article',
    CategoryList = 'category-list',
    Guide = 'guide',
    SearchResults = 'search-results',
    SeachResultsWithFilters = 'search-results--filters',
    // SeachResultsWithSidebar = 'search-results-with-sidebar', // @deprecated
    Questions = 'question-page',
}

export interface Layout extends Omit<WrapperTag, 'content'> {
    layout?: LayoutTypes,

    header?: React.ReactNode,
    partner?: React.ReactNode,
    navigation?: React.ReactNode,
    content?: React.ReactNode,
    list?: React.ReactNode,
    grid?: React.ReactNode,
    footer?: React.ReactNode,
    sidebar?: React.ReactNode,
    feedback?: React.ReactNode,

    hasHidePage?: boolean,
}
