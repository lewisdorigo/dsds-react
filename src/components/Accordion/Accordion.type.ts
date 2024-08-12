import type { Component, ComponentItem } from '../../utils/types';
import type { HeadingLevel } from '../../utils/types/meta';

export interface Item extends ComponentItem<
    HTMLDivElement
> {
    label: React.ReactNode,
    content: React.ReactNode,
    headingLevel?: HeadingLevel,
}

export interface Accordion extends Component<
    'accordion',
    HTMLDivElement,
    Item
> {
    allowOpenAll?: boolean,
}
