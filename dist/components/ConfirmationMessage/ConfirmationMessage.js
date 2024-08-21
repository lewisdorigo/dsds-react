import React from 'react';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
import { Icon, Types as IconTypes } from '../Icon';
import { Heading } from '../Heading';
/**
 * @param {Types.ConfirmationMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ConfirmationMessage = function ConfirmationMessage({ label, className, content, attributes = {}, headingLevel = 2, }) {
    return (React.createElement("div", { className: classNames('ds_confirmation-message', className), "aria-live": "polite", ...attributes },
        React.createElement(Icon, { className: "ds_confirmation-message__icon", icon: "check_circle", size: IconTypes.Size.TwentyFour }),
        React.createElement(Heading, { level: headingLevel, className: "ds_confirmation-message__title" }, htmlToReact(label, false)),
        content && (React.createElement("div", { className: "ds_confirmation-message__body" }, htmlToReact(content)))));
};
