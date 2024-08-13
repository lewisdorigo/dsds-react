import React from 'react';
import { FormComponent, ComponentItem, Components } from '../../utils/types';
import { Value } from '../../utils/types/meta';

export enum RadioSize {
    Small = 'small'
}
export interface RadioItem extends Omit<
    ComponentItem<HTMLInputElement>,
    'content'
> {
    content: never,
    name: string,
    hintText?: React.ReactNode,
    size?: RadioSize,
    items?: Components,
}

export interface RadioGroup extends FormComponent<
    'radio',
    HTMLInputElement,
    RadioItem,
    Value
> {
    size?: RadioSize,
    inline?: boolean,
}