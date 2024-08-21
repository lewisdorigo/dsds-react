import React from 'react';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.MetadataItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const MetadataItem = function MetadataItem({ label, value: rawValue, hideLabel, isLabel, }) {
    let value;
    if (rawValue instanceof Date) {
        value = (React.createElement("time", { dateTime: rawValue.toISOString() }, rawValue.toLocaleDateString('en-GB', {
            dateStyle: 'long',
        })));
    }
    else {
        value = htmlToReact(rawValue, false);
    }
    return (React.createElement("div", { className: "ds_metadata__item" },
        React.createElement("dt", { className: classNames('ds_metadata__key', hideLabel ? 'visually-hidden' : '') }, label),
        ' ',
        React.createElement("dd", { className: classNames('ds_metadata__value', isLabel ? 'ds_content-label' : '') },
            value,
            ' ')));
};
/**
 * @param {Types.Metadata} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Metadata = function Metadata({ items, className, inline = false, attributes = {}, }) {
    return (React.createElement("dl", { className: classNames('ds_metadata', inline ? 'ds_metadata--inline' : '', className), ...attributes }, items && items.map((item, index) => {
        const itemKey = `meta-data-${index}`;
        return React.createElement(MetadataItem, { key: itemKey, ...item });
    })));
};
