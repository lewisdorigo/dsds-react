import React from 'react';
import Link from 'next/link';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorSummary:React.FC<DSDS.Component.ErrorSummary> = function ErrorSummary({
    errors,
    id = 'error-summary',
    title = 'There is a problem',
    className,
    ...props
}) {
    return (
        <WrapperTag
            {...props}
            className={classNames(
                'ds_error-summary',
                className,
            )}
            role="alert"
            aria-labelledby={`${id}-title`}
            id={id}
            tabIndex={-1}
            autoFocus
        >
            <h2 className="ds_error-summary__title">
                {title}
            </h2>

            <ul className="ds_error-summary__list">
                {errors.map((error, index) => {
                    const key = `${id}-${index}`;
                    let message;

                    if (typeof error === 'string') {
                        message = error;
                    } else if ((error.fieldId || error.href) && error.message) {
                        message = (
                            <Link href={error.href || `#${error.fieldId}`}>
                                { error.message }
                            </Link>
                        );
                    } else if (error.message) {
                        message = error.message;
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
        </WrapperTag>
    );
};

export default ErrorSummary;
