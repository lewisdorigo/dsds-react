'use client';
import React, { useRef, useEffect } from 'react';
import SideNav from '@scottish-government/design-system/src/components/side-navigation/side-navigation';
import { Link } from '../Link';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.SideNavigationList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SideNavigationList = function SideNavigationList({ id = 'side-navigation', level = 0, items, }) {
    const idName = `${id}-${level}`;
    return (React.createElement("ul", { className: "ds_side-navigation__list", id: idName }, items.map(({ items: children, className, current, ...link }, index) => {
        const key = `${id}-${index}`;
        return (React.createElement("li", { key: key, className: classNames('ds_side-navigation__item', (children && children.length
                ? 'ds_side-navigation__item--has-children'
                : ''), (children && children.length
                ? 'ds_side-navigation__item--has-children--expanded'
                : '')) },
            React.createElement(Link, { tabText: false, ...link, className: classNames(current ? 'ds_current' : '', className), baseClass: "ds_side-navigation__link", "aria-current": current ? 'page' : undefined }),
            children && children.length > 0 && (React.createElement(SideNavigationList, { id: key, level: level + 1, items: children }))));
    })));
};
/**
 * @param {Types.SideNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SideNavigation = function SideNavigation({ items = [], id = 'side-navigation', label = 'Pages in this section', className, attributes: { 'aria-label': ariaLabel = 'Sections', ...attributes } = {}, }) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }
        new SideNav(ref.current).init();
    }, [ref]);
    return (React.createElement("nav", { className: classNames('ds_side-navigation', className), "aria-label": ariaLabel, id: id, ...attributes, ref: ref },
        React.createElement("input", { type: "checkbox", className: "fully-hidden js-toggle-side-navigation", id: `show-${id}`, "aria-controls": `${id}-0` }),
        React.createElement("label", { className: "ds_side-navigation__expand ds_link", htmlFor: `show-${id}` },
            React.createElement("span", { className: "visually-hidden" }, "Show all"),
            htmlToReact(label),
            React.createElement("span", { className: "ds_side-navigation__expand-indicator" })),
        React.createElement(SideNavigationList, { id: id, level: 0, items: items })));
};
