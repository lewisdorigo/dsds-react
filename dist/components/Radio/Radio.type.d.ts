import React from 'react';
import { FormComponent, ComponentItem, Components } from '../../utils/types';
import { Value } from '../../utils/types/meta';
export declare enum Size {
    Small = "small"
}
export interface RadioItem extends Omit<ComponentItem<HTMLInputElement>, 'content'> {
    name: string;
    hintText?: React.ReactNode;
    size?: Size;
    items?: Components;
}
export interface RadioGroup extends FormComponent<'radio', HTMLInputElement, Omit<RadioItem, 'name'>, Value> {
    size?: Size;
    inline?: boolean;
}
//# sourceMappingURL=Radio.type.d.ts.map