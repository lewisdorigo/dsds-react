import React from 'react';
import { Metadata } from '../Metadata';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.PageHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const PageHeader = function PageHeader({ id = 'page-header', label, title, metadata, className, headingLevel = 1, attributes: { 'aria-label': ariaLabel = 'Page Header', ...attributes } = {}, }) {
    return (React.createElement("header", { id: id, className: classNames('ds_page-header', className), "aria-label": ariaLabel, ...attributes },
        label && (React.createElement("span", { className: "ds_page-header__label ds_content-label" }, htmlToReact(label, false))),
        React.createElement(Heading, { level: headingLevel, id: `${id}-title`, className: classNames('ds_page-header__title', headingLevel > 1 ? 'alpha' : '') }, htmlToReact(title, false)),
        metadata && (React.createElement(Metadata, { id: `${id}-metadata`, items: metadata }))));
};
