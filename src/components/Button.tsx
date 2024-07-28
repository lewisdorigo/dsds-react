import React from 'react';

import Icon from './Icon';

import {
    ButtonType,
    ButtonIconPosition as IconPosition,
} from '../lib/enums';
import classNames from '../lib/classNames';

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
    ...props
}) {
    const className = classNames(
        'ds_button',
        rawClassName,

        size ? `ds_button--${size}` : '',
        width ? `ds_button--${width}` : '',
        style ? `ds_button--${style}` : '',

        icon ? 'ds_button--has-icon' : '',
        (
            iconPosition === IconPosition.Left
            || iconPosition === IconPosition.Right
                ? `ds_button--${iconPosition}`
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
                            { children }
                        </span>
                    )
                    : children
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
