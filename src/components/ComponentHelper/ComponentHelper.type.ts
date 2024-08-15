import React from 'react';
import {
    Components,
    ComponentType,
    Component,
} from '../../utils/types';
import { HeadingLevel } from '../../utils/types/meta';

export type ComponentHelperLookup = Record<string, React.FC<
    Omit<Component<unknown, any>, 'items'> & { items?: any } // eslint-disable-line @typescript-eslint/no-explicit-any
>>;

export interface ComponentHelper {
    component: ComponentType,
    customLookup?: ComponentHelperLookup,
    headingLevel?: HeadingLevel,
}

export interface ComponentsHelper {
    components: Components,
    customLookup?: ComponentHelperLookup,
    headingLevel?: HeadingLevel,
}
