import React from 'react';

import { Link } from '../Link';
import { Heading } from '../Heading';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './ErrorSummary.type';

/**
 * @param {Types.ErrorSummary} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorSummary:React.FC<
    Omit<Types.ErrorSummary, 'type'>
> = function ErrorSummary({
    items = [],
    id = 'error-summary',
    label = 'There is a problem',
    className,
    headingLevel = 2,
    attributes: {
        autoFocus = true,
        ...attributes
    } = {},
}) {
    return (
        <div
            className={classNames(
                'ds_error-summary',
                className,
            )}
            {...attributes}
            role="alert"
            aria-labelledby={`${id}-title`}
            id={id}
            tabIndex={-1}
            autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
        >
            <Heading
                level={headingLevel}
                className={classNames(
                    'ds_error-summary__title',
                    headingLevel !== 2 ? 'beta' : '',
                )}
            >
                { htmlToReact(label, false) }
            </Heading>

            <ul className="ds_error-summary__list">
                {items.map((error, index) => {
                    const key = `${id}-${index}`;
                    let message;

                    if (typeof error === 'string') {
                        message = htmlToReact(error, false);
                    } else if ((error.fieldId || error.href) && error.message) {
                        message = (
                            <Link baseClass="" href={error.href || `#${error.fieldId}`}>
                                { htmlToReact(error.message, false) }
                            </Link>
                        );
                    } else if (error.message) {
                        message = htmlToReact(error.message, false);
                    } else {
                        return null;
                    }

                    return (
                        <li key={key}>
                            { message }
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
