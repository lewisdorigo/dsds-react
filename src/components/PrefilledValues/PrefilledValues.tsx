import React from 'react';

import addClassToElement from '../../lib/addClass';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './PrefilledValues.type';

/**
 * @param {Types.PrefilledValues} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const PrefilledValues:React.FC<
    Omit<Types.PrefilledValues, 'type'>
> = function PrefilledValues({
    items = [],
    id,
    label = 'Your current answers',
    className,
    attributes = {},
}) {
    return (
        <dl
            aria-label={label}
            {...attributes}
            className={classNames(
                'ds_prefilled-value-list',
                className,
            )}
            id={id}
        >
            { items.map((item, index) => {
                const key = `${id}-${index}`;

                return (
                    <React.Fragment key={key}>
                        <dt className="ds_prefilled-value-list__key">
                            { htmlToReact(item.label, false) }
                        </dt>
                        <dd className="ds_prefilled-value-list__value">
                            <div>{ htmlToReact(item.value, false) }</div>
                            {' '}
                            { item.actions.map((action) => addClassToElement(
                                action,
                                'ds_prefilled-value-list__value-actions',
                            )) }
                        </dd>
                    </React.Fragment>
                );
            })}
        </dl>
    );
};
