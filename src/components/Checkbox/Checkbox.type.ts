import React from 'react';
import { FormComponent, ComponentItem } from '../../utils/types';
import { Value } from '../../utils/types/meta';

export enum Size {
    Small = 'small'
}

export interface CheckboxItem extends Omit<
    ComponentItem<HTMLInputElement>,
    'content'
> {
    name: string,
    hintText?: React.ReactNode,
    size?: Size,
    exclusive?: boolean | string,
}

export interface CheckboxGroup extends FormComponent<
    'checkbox',
    HTMLInputElement,
    Omit<CheckboxItem, 'name'>,
    Value[]
> {
    size?: Size,
}
