import React from 'react';
import { Icon } from '../Icon';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
import * as Types from './Button.type';
/**
 * @param {Types.Button} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Button = function Button({ type = Types.Type.Button, href, size, width, style, icon, iconPosition: rawIconPosition, className: rawClassName, children, label, ...props }) {
    const iconPosition = icon ? rawIconPosition || Types.IconPosition.Right : undefined;
    const className = classNames('ds_button', rawClassName, size ? `ds_button--${size}` : '', width ? `ds_button--${width}` : '', style ? `ds_button--${style}` : '', (icon
        && iconPosition !== Types.IconPosition.IconOnly
        ? 'ds_button--has-icon'
        : ''), (iconPosition === Types.IconPosition.Left
        || iconPosition === Types.IconPosition.Right
        ? `ds_button--has-icon--${iconPosition}`
        : ''));
    const buttonContent = (React.createElement(React.Fragment, null,
        icon
            && iconPosition === Types.IconPosition.Left
            && React.createElement(Icon, { icon: icon }),
        (icon
            && iconPosition === Types.IconPosition.IconOnly
            ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "visually-hidden" },
                    label && htmlToReact(label, false),
                    children),
                "\u00A0"))
            : [
                label && htmlToReact(label, false),
                children,
            ]),
        icon
            && (iconPosition === Types.IconPosition.Right
                || iconPosition === Types.IconPosition.IconOnly)
            && React.createElement(Icon, { icon: icon })));
    if (href) {
        return (React.createElement("a", { href: href, ...props, className: className }, buttonContent));
    }
    return (React.createElement("button", { ...props, type: type, className: className }, buttonContent));
};
