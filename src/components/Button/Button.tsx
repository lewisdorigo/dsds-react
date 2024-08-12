import React from 'react';

import Icon from '../Icon';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import {
    Type,
    IconPosition,
} from './Button.type';

import type { Button } from './Button.type';

/**
 * @param {Button} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Button:React.FC<Button> = function Button({
    type = Type.Button,
    href,
    size,
    width,
    style,

    icon,
    iconPosition: rawIconPosition,

    className: rawClassName,
    children,
    label,
    ...props
}) {
    const iconPosition = icon ? rawIconPosition || IconPosition.Right : undefined;

    const className = classNames(
        'ds_button',
        rawClassName,

        size ? `ds_button--${size}` : '',
        width ? `ds_button--${width}` : '',
        style ? `ds_button--${style}` : '',

        (
            icon
            && iconPosition !== IconPosition.IconOnly
                ? 'ds_button--has-icon'
                : ''
        ),
        (
            iconPosition === IconPosition.Left
            || iconPosition === IconPosition.Right
                ? `ds_button--has-icon--${iconPosition}`
                : ''
        ),
    );

    const buttonContent = (
        <>
            {
                icon
                && iconPosition === IconPosition.Left
                && <Icon icon={icon} />
            }
            {(
                icon
                && iconPosition === IconPosition.IconOnly
                    ? (
                        <>
                            <span className="visually-hidden">
                                { label && htmlToReact(label, false) }
                                { children }
                            </span>
                            &nbsp;
                        </>
                    )
                    : [
                        label && htmlToReact(label, false),
                        children,
                    ]
            )}
            {
                icon
                && (
                    iconPosition === IconPosition.Right
                    || iconPosition === IconPosition.IconOnly
                )
                && <Icon icon={icon} />
            }
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                {...props as React.HTMLProps<HTMLAnchorElement>}
                className={className}
            >
                { buttonContent }
            </a>
        );
    }

    return (
        <button
            {...props as React.HTMLProps<HTMLButtonElement>}
            type={type}
            className={className}
        >
            { buttonContent }
        </button>
    );
};

export default Button;
