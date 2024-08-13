import type React from 'react';

import type { WrapperTag } from '../../components/WrapperTag/WrapperTag.type';

export interface Page extends WrapperTag {
    top?: React.ReactNode,
    middle?: React.ReactNode,
    bottom?: React.ReactNode,

    includeBackToTop?: boolean,
    includeSkipLinks?: boolean,
    wrapMiddle?: boolean,
    hasHidePage?: boolean,
}
