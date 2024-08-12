import React, { isValidElement } from 'react';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type { PrefilledValues } from './PrefilledValues.type';

/**
 * @param {PrefilledValues} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PrefilledValues:React.FC<
    Omit<PrefilledValues, 'type'>
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
                            { item.actions.map((action) => (
                                action && typeof action === 'object' && isValidElement(action)
                                    ? React.cloneElement(action as React.ReactElement, {
                                        className: classNames(
                                            'ds_prefilled-value-list__value-actions',
                                            action.props.className ? action.props.className : null,
                                        ),
                                    })
                                    : action
                            )) }
                        </dd>
                    </React.Fragment>
                );
            })}
        </dl>
    );
};

export default PrefilledValues;
