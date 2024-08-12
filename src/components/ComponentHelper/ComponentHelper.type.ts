import React from 'react';
import { Components, Component, FormComponent } from '../../utils/types';
import { HeadingLevel } from '../../utils/types/meta';

export type ComponentHelperLookup = Record<string, React.FC<
    Omit<Component<unknown, any, any>, 'items'> & { items?: any } // eslint-disable-line @typescript-eslint/no-explicit-any
>>;

export interface ComponentHelper {
    component: React.ReactNode | Component | FormComponent,
    customLookup?: ComponentHelperLookup,
    headingLevel?: HeadingLevel,
}

export interface ComponentsHelper {
    components: Components,
    customLookup?: ComponentHelperLookup,
    headingLevel?: HeadingLevel,
}
