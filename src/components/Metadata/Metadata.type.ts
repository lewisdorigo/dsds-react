import React from 'react';
import { Component, ComponentItem } from '../../utils/types';

export interface MetadataItem extends Omit<
    ComponentItem<HTMLDivElement>,
    'value'
> {
    value: Date | React.ReactNode,
    hideLabel?: boolean,
    isLabel?: boolean,
}

export interface Metadata extends Component<
    'metadata',
    HTMLDListElement,
    MetadataItem
> {
    inline?: boolean,
}
