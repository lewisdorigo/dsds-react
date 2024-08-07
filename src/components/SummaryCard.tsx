import React from 'react';

import SummaryList from './SummaryList';
import Link from './Link';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';
import Heading from './Heading';

/**
 * @param {DSDS.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryCardActions:React.FC<
    DSDS.Component.SummaryList.Actions
> = function SummaryListActions({
    itemId,
    actions = [],
}) {
    if (actions.length < 1) {
        return null;
    }

    return (
        <ul
            className="ds_summary-card__actions-list"
            id={`${itemId}-actions`}
        >
            { actions.map(({ label, action }, index) => {
                const key = `summary-card-action-${index}`;

                return (
                    <li
                        key={key}
                        className="ds_summary-card__actions-list-item"
                    >
                        <Link
                            href={action}
                            aria-describedby={`${itemId}-label`}
                        >
                            { label }
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

/**
 * @param {DSDS.Component.SummaryCard} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SummaryCard:React.FC<DSDS.Component.SummaryCard> = function SummaryCard({
    className,
    label,
    headingLevel = 3,
    actions,
    borders,
    id,
    items = [],
    attributes = {},
}) {
    return (
        <div
            id={id}
            className={classNames(
                'ds_summary-card',
                className,
            )}
            {...attributes}
        >
            <div className="ds_summary-card__header">
                <Heading
                    level={headingLevel}
                    className="ds_summary-card-title"
                    id={`${id}-label`}
                >
                    { htmlToReact(label, false) }
                </Heading>
                <SummaryCardActions itemId={id} actions={actions} />
            </div>
            <div className="ds_summary-card__content">
                <SummaryList
                    id={`${id}-list`}
                    borders={borders}
                    items={items}
                />
            </div>
        </div>
    );
};

export default SummaryCard;
