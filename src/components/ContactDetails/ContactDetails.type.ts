import React from 'react';
import { Component, ComponentItem } from '../../utils/types';

export interface ContactDetailsItem extends Omit<
    ComponentItem,
    'id' | 'value'
> {
    label: React.ReactNode,
    items?: React.ReactNode[],
}

export interface ContactDetails extends Component<
    'contact-details',
    HTMLDivElement,
    ContactDetailsItem
> {}
