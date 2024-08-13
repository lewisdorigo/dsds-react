import { Component } from '../../utils/types';

export interface Pagination extends Omit<
    Component<
        'pagination',
        HTMLDivElement,
        string
    >,
    'label' | 'content'
> {
    currentIndex?: number,
    eachSideOfCurrent?: number,
}
