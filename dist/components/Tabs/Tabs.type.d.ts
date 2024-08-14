import type React from 'react';
import type { Component, ComponentItem } from '../../utils/types';
export interface TabItem extends ComponentItem<HTMLDivElement> {
    label: React.ReactNode;
    content: React.ReactNode;
}
export interface Tabs extends Component<'tabs', HTMLDivElement, TabItem> {
    bordered?: boolean;
}
//# sourceMappingURL=Tabs.type.d.ts.map