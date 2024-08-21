import React from 'react';

import { Link } from '../Link';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './SummaryList.type';

/**
 * @param {DSDS.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryListActions:React.FC<
    Types.SummaryListActions
> = function SummaryListActions({
    itemId,
    actions = [],
}) {
    if (actions.length < 1) {
        return null;
    }

    return (
        <div
            className="ds_summary-list__actions"
            id={`${itemId}-actions`}
        >
            <ul className="ds_summary-list__actions-list">
                { actions.map(({ label, action }, index) => {
                    const key = `${itemId}-action-${index}`;

                    return (
                        <li
                            key={key}
                            className="ds_summary-list__actions-list-item"
                        >
                            <Link
                                href={action}
                                aria-describedby={`${itemId}-label ${itemId}-answer`}
                            >
                                { label }
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

/**
 * @param {Types.SummaryListAnswer} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryListAnswer:React.FC<
    Types.SummaryListAnswer
> = function SummaryListAnswer({
    answer,
    itemId,
}) {
    if (
        Array.isArray(answer)
        && (
            typeof answer[0]
            && (
                typeof answer[0] !== 'object'
                || !Object.prototype.hasOwnProperty.call(answer[0], 'label')
            )
        )
    ) {
        const ans = answer as React.ReactNode[];
        return (
            <ul className="ds_no-margin--vertical">
                {ans.map((item, index) => {
                    const key = `${itemId}-answer-${index}`;
                    return (
                        <li key={key} className="ds_no-margin--bottom">
                            <SummaryListAnswer itemId={key} answer={item} />
                        </li>
                    );
                })}
            </ul>
        );
    }

    if (
        Array.isArray(answer)
        && (
            typeof answer[0]
            && typeof answer[0] === 'object'
            && Object.prototype.hasOwnProperty.call(answer[0], 'label')
            && Object.prototype.hasOwnProperty.call(answer[0], 'value')
        )
    ) {
        const ans = answer as Types.AnswerItem[];
        return (
            <dl className="ds_no-margin--bottom">
                {ans.map(({ label, value }, index) => {
                    const key = `${itemId}-answer-${index}`;
                    return (
                        <React.Fragment key={key}>
                            <dt>{ htmlToReact(label, false) }</dt>
                            <dd><SummaryListAnswer itemId={key} answer={value} /></dd>
                        </React.Fragment>
                    );
                })}
            </dl>
        );
    }

    return htmlToReact(answer as React.ReactNode, false);
};

/**
 * @param {Types.SummaryListItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryListItem:React.FC<Types.SummaryListItem> = function SummaryListItem({
    id,
    label,
    value,
    actions,
}) {
    return (
        <li
            className="ds_summary-list__item"
            id={id}
        >
            <div
                className="ds_summary-list__key"
                id={`${id}-label`}
            >
                { htmlToReact(label, false) }
            </div>

            <div className="ds_summary-list__value">
                <span className="visually-hidden">Your answer is:</span>
                <q
                    className="ds_summary-list__answer"
                    id={`${id}-answer`}
                >
                    <SummaryListAnswer itemId={id} answer={value} />
                </q>
            </div>

            { actions && actions.length > 0 && (
                <SummaryListActions
                    itemId={id}
                    actions={actions}
                />
            )}
        </li>
    );
};

/**
 * @param {Types.SummaryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryList:React.FC<Omit<Types.SummaryList, 'type'>> = function SummaryList({
    className,
    borders = true,
    items = [],
    id,
    attributes = {},
}) {
    return (
        <ol
            id={id}
            className={classNames(
                'ds_summary-list',
                !borders ? 'ds_summary-list--no-border' : '',
                className,
            )}
            {...attributes as React.OlHTMLAttributes<HTMLOListElement>}
        >
            { items.map((item, index) => {
                const key = `${id}-${index}`;

                return (
                    <SummaryListItem
                        key={key}
                        id={key}
                        {...item}
                    />
                );
            })}
        </ol>
    );
};
