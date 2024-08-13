import type React from 'react';
import type { Component, ComponentItem } from '../../utils/types';

export type AnswerItem = { label: React.ReactNode, value: Answer }

type Answer = (
    React.ReactNode
    | React.ReactNode[]
    | AnswerItem[]
);

interface Action {
    label: string,
    action: string,
}

export interface SummaryListActions {
    itemId: string,
    actions?: Action[],
}

export interface SummaryListAnswer {
    itemId: string,
    answer: Answer,
}

export interface SummaryListItem extends Omit<SummaryListActions, 'itemId'>, Omit<
    ComponentItem<HTMLLIElement>,
    'content' | 'value'
> {
    id: string,
    value?: Answer,
}

export interface SummaryList<Tag extends HTMLElement = HTMLOListElement> extends Omit<
    Component<
        'summary-list',
        Tag,
        Omit<SummaryListItem, 'id'> & { id?: string }
    >,
    'label' | 'content'
> {
    id: string,
    borders?: boolean,
}
