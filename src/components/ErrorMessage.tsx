import React from 'react';

import WrapperTag from './WrapperTag';
import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.ErrorMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorMessage:React.FC<DSDS.Component.ErrorMessage> = function ErrorMessage({
    children,
    className,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_question__error-message',
                className,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

/**
 * @param {DSDS.Component.ErrorMessages} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorMessages:React.FC<DSDS.Component.ErrorMessages> = function ErrorMessages({
    errors: rawErrors,
    fieldId = '',
}) {
    const errors = Array.isArray(rawErrors) ? rawErrors : [rawErrors];

    return errors.map((error, index) => {
        const key = `error-${fieldId}-${index}`;

        return (
            <ErrorMessage
                key={key}
            >
                {(typeof error === 'string'
                    ? error
                    : error.fieldMessage || error.message
                )}
            </ErrorMessage>
        );
    });
};

export default ErrorMessage;
