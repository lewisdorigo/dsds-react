import React from 'react';
import { Heading } from '../Heading';
import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';
/**
 * @param {Types.ContactDetails} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ContactDetails = function ContactDetails({ id, label, className, headingLevel = 2, items = [], attributes = {}, }) {
    if (items.length < 1) {
        return null;
    }
    return (React.createElement("div", { ...attributes, id: id, className: classNames('ds_contact-details', className) },
        label && (React.createElement(Heading, { level: headingLevel, className: "ds_contact-details__title" }, htmlToReact(label, false))),
        React.createElement("address", null,
            React.createElement("dl", null, items.map((item, index) => {
                const key = `${item}-${index}`;
                return (React.createElement("div", { className: "ds_contact-details__item", key: key },
                    React.createElement("dt", null, htmlToReact(item.label, false)),
                    item.items && item.items.map((detail, detailIndex) => {
                        const detailKey = `${key}-${detailIndex}`;
                        return (React.createElement("dd", { key: detailKey }, htmlToReact(detail, false)));
                    })));
            })))));
};
