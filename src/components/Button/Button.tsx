import React from 'react';

import { Icon } from '../Icon';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import * as Types from './Button.type';

/**
 * @param {Types.Button} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Button:React.FC<Types.Button> = function Button({
    type = Types.Type.Button,
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
    const iconPosition = icon ? rawIconPosition || Types.IconPosition.Right : undefined;

    const className = classNames(
        'ds_button',
        rawClassName,

        size ? `ds_button--${size}` : '',
        width ? `ds_button--${width}` : '',
        style ? `ds_button--${style}` : '',

        (
            icon
            && iconPosition !== Types.IconPosition.IconOnly
                ? 'ds_button--has-icon'
                : ''
        ),
        (
            iconPosition === Types.IconPosition.Left
            || iconPosition === Types.IconPosition.Right
                ? `ds_button--has-icon--${iconPosition}`
                : ''
        ),
    );

    const buttonContent = (
        <>
            {
                icon
                && iconPosition === Types.IconPosition.Left
                && <Icon icon={icon} />
            }
            {(
                icon
                && iconPosition === Types.IconPosition.IconOnly
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
                    iconPosition === Types.IconPosition.Right
                    || iconPosition === Types.IconPosition.IconOnly
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
