import React from 'react';

import * as Conditional from './conditional';
import * as Meta from './meta';
import * as Validation from './validation';

export interface ComponentItem<
    Tag extends HTMLElement = HTMLElement
> {
    id: string,
    label?: React.ReactNode,
    content?: React.ReactNode,
    value?: Meta.Value,
    attributes?: Partial<React.HTMLProps<Tag>>,
}

export interface Component<
    Type = unknown,
    Tag extends HTMLElement = HTMLElement,
    Items = never,
> {
    id?: string,
    type: Type,

    label?: React.ReactNode,
    content?: React.ReactNode,

    className?: string,
    headingLevel?: Meta.HeadingLevel,

    attributes?: Partial<React.HTMLProps<Tag>>,
    items?: (
        Items extends never
            ? Items
            : Items[]
    ),
    conditions?: Conditional.Condition | Conditional.Items,

    ref?: React.Ref<Tag>,
}

export interface FormComponent<
    Type = unknown,
    Tag extends HTMLElement = HTMLElement,
    Items = never,
    Value = Meta.Value | Meta.Value[],
> extends Omit<
    Component<Type, Tag, Items>,
    'label'
> {
    id: string,
    name: string,

    label?: React.ReactNode | Meta.Label,
    hintText?: React.ReactNode,

    required?: boolean,
    validation?: Validation.Validation[],
    value?: Value,
    error?: Validation.Errors,
}

export type ComponentType<Additional = unknown> = (
    React.ReactNode
    | Component<unknown, HTMLElement, unknown> & Additional
    | FormComponent<unknown, HTMLElement, unknown> & Additional
);
export type Components = ComponentType[];
