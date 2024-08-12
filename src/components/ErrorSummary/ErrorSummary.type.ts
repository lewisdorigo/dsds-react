import { Component } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';
import { FieldErrors } from '../../utils/types/validation';

export interface ErrorSummary extends HasTag, Omit<
    Component<
        'error-summary',
        HTMLDivElement,
        FieldErrors
    >,
    'content'
> {
    // attributes?: Partial<React.HTMLProps<HTMLElement>> & { autoFocus: boolean },
}
