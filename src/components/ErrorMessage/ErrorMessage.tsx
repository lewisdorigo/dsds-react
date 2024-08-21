import React from 'react';

import { WrapperTag } from '../WrapperTag';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './ErrorMessage.type';

/**
 * @param {Types.ErrorMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorMessage:React.FC<Types.ErrorMessage> = function ErrorMessage({
    tag = 'div',
    children,
    className,
    ...props
}) {
    return (
        <WrapperTag
            tag={tag}
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
 * @param {Types.ErrorMessages} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorMessages:React.FC<
    Omit<Types.ErrorMessages, 'type'>
> = function ErrorMessages({
    items: rawErrors = [],
    id = '',
}) {
    const errors = Array.isArray(rawErrors) ? rawErrors : [rawErrors];

    if (errors.length < 1) {
        return null;
    }

    return (
        <ul className="ds_no-bullets" id={id}>
            {errors.map((error, index) => {
                const key = `${id}-${index}`;

                return (
                    <ErrorMessage
                        tag="li"
                        key={key}
                    >
                        {htmlToReact(
                            typeof error === 'string'
                                ? error
                                : error.fieldMessage || error.message,
                            false,
                        )}
                    </ErrorMessage>
                );
            })}
        </ul>
    );
};
