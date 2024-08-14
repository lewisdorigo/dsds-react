import React from 'react';
import { Component, ComponentItem } from '../../utils/types';
export interface PrefilledValuesItem extends Omit<ComponentItem, 'attributes' | 'content'> {
    actions: React.ReactNode[];
}
export interface PrefilledValues extends Omit<Component<'prefilled-values', HTMLDListElement, PrefilledValuesItem>, 'label' | 'content' | 'headingLevel'> {
    label?: string;
}
//# sourceMappingURL=PrefilledValues.type.d.ts.map