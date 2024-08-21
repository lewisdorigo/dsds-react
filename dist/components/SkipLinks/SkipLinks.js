import React from 'react';
import classNames from '../../lib/classNames';
/**
 * @param {Types.SkipLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SkipLinks = function SkipLinks({ mainContent = '#main-content', items = [], className, ...props }) {
    return (React.createElement("div", { className: classNames('ds_skip-links', className), ...props },
        React.createElement("ul", { className: "ds_skip-links__list" },
            React.createElement("li", { className: "ds_skip-links__item" },
                React.createElement("a", { href: mainContent, className: "ds_skip-links__link" }, "Skip to main content")),
            items.map(({ href, label }, index) => {
                const key = `skip-links-${index}`;
                return (React.createElement("li", { className: "ds_skip-links__item", key: key },
                    React.createElement("a", { href: href, className: "ds_skip-links__link" }, label)));
            }))));
};
