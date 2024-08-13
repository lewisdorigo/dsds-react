import React from 'react';
import { Component, ComponentType } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';

export interface FieldGroup extends React.PropsWithChildren, HasTag, Omit<
    Component<
        'group' | 'fieldset',
        HTMLDivElement | HTMLFieldSetElement,
        ComponentType
    >,
    'type'
> {
    type?: 'group' | 'fieldset',
    hintText?: React.ReactNode,
    inline?: boolean,
}
