import React from 'react';
import { FormComponent, ComponentItem, Components } from '../../utils/types';
import { Value } from '../../utils/types/meta';
export declare enum RadioSize {
    Small = "small"
}
export interface RadioItem extends Omit<ComponentItem<HTMLInputElement>, 'content'> {
    name: string;
    hintText?: React.ReactNode;
    size?: RadioSize;
    items?: Components;
}
export interface RadioGroup extends FormComponent<'radio', HTMLInputElement, Omit<RadioItem, 'name'>, Value> {
    size?: RadioSize;
    inline?: boolean;
}
//# sourceMappingURL=Radio.type.d.ts.map