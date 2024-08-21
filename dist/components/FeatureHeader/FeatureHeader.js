import React from 'react';
import { Image } from '../Image';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.FeatureHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FeatureHeader = function FeatureHeader({ title, className, content, hasBackground = false, style, children, image, headingLevel = 1, attributes: { 'aria-label': ariaLabel = 'Page Header', ...attributes } = {}, }) {
    return (React.createElement("header", { className: classNames('ds_feature-header', hasBackground ? 'ds_feature-header--background' : '', style ? `ds_feature-header--${style}` : '', className), "aria-label": ariaLabel, ...attributes },
        React.createElement("div", { className: "ds_feature-header__primary" },
            React.createElement(Heading, { level: headingLevel, className: "ds_feature-header__title" }, htmlToReact(title, false)),
            content && htmlToReact(content),
            children),
        React.createElement("div", { className: "ds_feature-header__secondary" }, image && (React.createElement(Image, { alt: "", ...image, className: "ds_feature-header__image" })))));
};
