import React from 'react';
import { Components, ComponentType, Component } from '../../utils/types';
import { HeadingLevel } from '../../utils/types/meta';
export type ComponentHelperLookup = Record<string, React.FC<Omit<Component<unknown, any>, 'items'> & {
    items?: any;
}>>;
export interface ComponentHelper {
    component: ComponentType;
    customLookup?: ComponentHelperLookup;
    headingLevel?: HeadingLevel;
}
export interface ComponentsHelper {
    components: Components;
    customLookup?: ComponentHelperLookup;
    headingLevel?: HeadingLevel;
}
//# sourceMappingURL=ComponentHelper.type.d.ts.map