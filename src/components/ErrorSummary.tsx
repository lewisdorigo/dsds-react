import React from 'react';
import Link from 'next/link';

import Heading from './Heading';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.ErrorSummary} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorSummary:React.FC<
    Omit<DSDS.Component.ErrorSummary, 'type'>
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
    console.log({ id, autoFocus });

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
                { htmlToReact(label) }
            </Heading>

            <ul className="ds_error-summary__list">
                {items.map((error, index) => {
                    const key = `${id}-${index}`;
                    let message;

                    if (typeof error === 'string') {
                        message = htmlToReact(error);
                    } else if ((error.fieldId || error.href) && error.message) {
                        message = (
                            <Link href={error.href || `#${error.fieldId}`}>
                                { htmlToReact(error.message) }
                            </Link>
                        );
                    } else if (error.message) {
                        message = htmlToReact(error.message);
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

export default ErrorSummary;
