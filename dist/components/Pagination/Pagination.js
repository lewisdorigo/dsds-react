import React from 'react';
import { Icon } from '../Icon';
import classNames from '../../lib/classNames';
/**
 * @param {Types.Pagination} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Pagination = function Pagination({ currentIndex = 0, eachSideOfCurrent = 1, items = [], className, attributes: { 'aria-label': ariaLabel = 'Pages', ...attributes } = {}, }) {
    const previous = currentIndex > 0 ? items[currentIndex - 1] : undefined;
    const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : undefined;
    let last = '';
    return (React.createElement("nav", { className: classNames('ds_pagination', className), "aria-label": ariaLabel, ...attributes },
        React.createElement("ul", { className: "ds_pagination__list" },
            previous && (React.createElement("a", { href: previous, className: classNames('ds_pagination__link', 'ds_pagination__link--text', 'ds_pagination__link--icon'), "aria-label": "Previous page" },
                React.createElement(Icon, { icon: "chevron_left" }),
                React.createElement("span", { className: "ds_pagination__link-label" }, "Previous"))),
            items.map((page, index) => {
                const key = `page-${index}`;
                const number = index + 1;
                const isCurrent = index === currentIndex;
                const isShown = (index === 0
                    || index === items.length - 1
                    || (index >= currentIndex - eachSideOfCurrent
                        && index <= currentIndex + eachSideOfCurrent));
                if (!isShown && !last) {
                    return null;
                }
                last = isShown ? page : '';
                return (React.createElement("li", { className: "ds_pagination__item", key: key, "aria-hidden": !isShown ? true : undefined }, (isShown
                    ? (React.createElement("a", { href: page, className: classNames('ds_pagination__link', isCurrent ? 'ds_current' : ''), "aria-label": `Page ${number}`, "aria-current": isCurrent ? 'page' : undefined },
                        React.createElement("span", { className: "ds_pagination__link-label" }, number)))
                    : (React.createElement("span", { className: "ds_pagination__link  ds_pagination__link--ellipsis" }, "\u2026")))));
            }),
            next && (React.createElement("a", { href: next, className: classNames('ds_pagination__link', 'ds_pagination__link--text', 'ds_pagination__link--icon'), "aria-label": "Next page" },
                React.createElement("span", { className: "ds_pagination__link-label" }, "Next"),
                React.createElement(Icon, { icon: "chevron_right" }))))));
};
