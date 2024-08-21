import React from 'react';
import classNames from '../../lib/classNames';
/**
 * @param {Types.Icon} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Icon = function Icon({ icon, accessible = true, className, label = '', size, pathToSvg = '/design-system/images/icons/icons.stack.svg', ...props }) {
    return (React.createElement("svg", { className: classNames('ds_icon', `ds_icon--${icon}`, size ? `ds_icon--${size}` : '', className), role: "img", "aria-hidden": accessible ? 'false' : 'true', "aria-label": label, ...props },
        React.createElement("use", { xlinkHref: `${pathToSvg}#${icon}` })));
};
