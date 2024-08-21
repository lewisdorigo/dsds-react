import React from 'react';
import { Link } from '../Link';
import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';
/**
 * @param {Types.SequentialNavigationItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SequentialNavigationItem = function SequentialNavigationItem({ type = 'previous', label, link, }) {
    let typeClass;
    let side;
    let buttonLabel;
    switch (type) {
        case 'next':
            typeClass = 'next';
            side = 'right';
            buttonLabel = 'Next';
            break;
        default:
            typeClass = 'prev';
            side = 'left';
            buttonLabel = 'Previous';
            break;
    }
    return (React.createElement("div", { className: classNames('ds_sequential-nav__item', `ds_sequential-nav__item--${typeClass}`) },
        React.createElement(Link, { ...link, baseClass: classNames('ds_sequential-nav__button', `ds_sequential-nav__button--${side}`) },
            React.createElement("span", { className: "ds_sequential-nav__text", "data-label": buttonLabel }, htmlToReact(label, false)))));
};
/**
 * @param {Types.SequentialNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SequentialNavigation = function SequentialNavigation({ id = 'sequential-navigation', items = [], className, attributes, }) {
    return (React.createElement("nav", { className: classNames('ds_sequential-nav', className), id: id, ...attributes }, items.map((item, index) => {
        if (index > 1) {
            return null;
        }
        const type = index === 0 ? 'previous' : 'next';
        const key = `${id}-${index}`;
        return (React.createElement(SequentialNavigationItem, { key: key, ...item, type: type }));
    })));
};
