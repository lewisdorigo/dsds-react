import React from 'react';
import { FormComponent, ComponentItem } from '../../utils/types';
import { Value } from '../../utils/types/meta';
export declare enum CheckboxSize {
    Small = "small"
}
export interface CheckboxItem extends ComponentItem<HTMLInputElement> {
    content: never;
    name: string;
    hintText?: React.ReactNode;
    size?: CheckboxSize;
    exclusive?: boolean | string;
}
export interface Checkbox extends FormComponent<'checkbox', HTMLInputElement, CheckboxItem, Value[]> {
    size?: CheckboxSize;
}
//# sourceMappingURL=Checkbox.type.d.ts.map