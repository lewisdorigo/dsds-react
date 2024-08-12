import type { Component } from '../../utils/types';
import type { Link } from '../Link/Link.type';

export interface Breadcrumbs extends Omit<
    Component<
        'breadcrumb',
        HTMLDivElement,
        Link
    >,
    'label' | 'content'
> {
    hideCurrent?: boolean,
}
