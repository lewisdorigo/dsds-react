import React from 'react';

import Link from './Link';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListActions:React.FC<
    DSDS.Component.SummaryList.Actions
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
 * @param {DSDS.Component.SummaryList.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryListItem:React.FC<DSDS.Component.SummaryList.Item> = function SummaryListItem({
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
            <span
                className="ds_summary-list__key"
                id={`${id}-label`}
            >
                { htmlToReact(label, false) }
            </span>

            <span className="ds_summary-list__value">
                <span className="visually-hidden">Your answer is:</span>
                <q
                    className="ds_summary-list__answer"
                    id={`${id}-answer`}
                >
                    { htmlToReact(value, false) }
                </q>
            </span>

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
 * @param {DSDS.Component.SummaryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryList:React.FC<Omit<DSDS.Component.SummaryList, 'type'>> = function SummaryList({
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

export default SummaryList;
