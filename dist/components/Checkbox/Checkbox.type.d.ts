import React from 'react';
import { FormComponent, ComponentItem } from '../../utils/types';
import { Value } from '../../utils/types/meta';
export declare enum CheckboxSize {
    Small = "small"
}
export interface CheckboxItem extends Omit<ComponentItem<HTMLInputElement>, 'content'> {
    name: string;
    hintText?: React.ReactNode;
    size?: CheckboxSize;
    exclusive?: boolean | string;
}
export interface Checkbox extends FormComponent<'checkbox', HTMLInputElement, Omit<CheckboxItem, 'name'>, Value[]> {
    size?: CheckboxSize;
}
//# sourceMappingURL=Checkbox.type.d.ts.map