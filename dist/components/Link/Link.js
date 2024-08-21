import React from 'react';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.Link} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Link = function Link({ content, href, type, target, className, baseClass = 'ds_link', rel, children, tabText = true, ...props }) {
    const linkRel = (href
        && (target === '_blank'
            || target === '_new')
        ? 'noreferrer noopener'
        : '');
    const newTabText = (typeof tabText === 'string'
        ? tabText
        : '(opens in a new tab)');
    const linkContent = (React.createElement(React.Fragment, null,
        content && htmlToReact(content, false),
        children,
        (target === '_blank' || target === '_new') && (React.createElement(React.Fragment, null,
            tabText && ` ${newTabText}`,
            !tabText && React.createElement("span", { className: "visually-hidden" }, newTabText)))));
    if (href) {
        return (React.createElement("a", { ...props, className: classNames(baseClass, className), href: href, target: target, rel: rel || linkRel }, linkContent));
    }
    return (React.createElement("button", { ...props, type: type, className: classNames(baseClass, className) }, linkContent));
};
