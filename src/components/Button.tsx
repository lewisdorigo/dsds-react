import React from 'react';

import Icon from './Icon';

import {
    ButtonType,
    ButtonIconPosition as IconPosition,
} from '../lib/enums';
import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Button} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Button:React.FC<DSDS.Component.Button> = function Button({
    type = ButtonType.Button,
    href,
    size,
    width,
    style,

    icon,
    iconPosition,

    className: rawClassName,
    children,
    label,
    ...props
}) {
    const className = classNames(
        'ds_button',
        rawClassName,

        size ? `ds_button--${size}` : '',
        width ? `ds_button--${width}` : '',
        style ? `ds_button--${style}` : '',

        (
            icon
            && iconPosition !== IconPosition.Only
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
                && iconPosition === IconPosition.Only
                    ? (
                        <span className="visually-hidden">
                            { label && htmlToReact(label, false) }
                            { children }
                        </span>
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
                    || iconPosition === IconPosition.Only
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
