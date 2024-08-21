'use client';
import React, { useEffect, useRef } from 'react';
import DSDSAccordion from '@scottish-government/design-system/src/components/accordion/accordion';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AccordionItem = function AccordionItem({ id, label, content, attributes, headingLevel = 3, }) {
    return (React.createElement("div", { className: "ds_accordion-item", id: id, ...attributes },
        React.createElement("input", { type: "checkbox", className: "visually-hidden ds_accordion-item__control", id: `${id}-control`, "aria-labelledby": `${id}-heading`, "aria-controls": `${id}-content` }),
        React.createElement("div", { className: "ds_accordion-item__header" },
            React.createElement(Heading, { level: headingLevel, id: `${id}-heading`, className: "ds_accordion-item__title" }, label),
            React.createElement("span", { className: "ds_accordion-item__indicator" }),
            React.createElement("label", { className: "ds_accordion-item__label", htmlFor: `${id}-control` },
                React.createElement("span", { className: "visually-hidden" }, "Show this section"))),
        React.createElement("div", { className: "ds_accordion-item__body", "aria-labelledby": `${id}-content` }, htmlToReact(content))));
};
/**
 * @param {Types.Accordion} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Accordion = function Accordion({ id, allowOpenAll = true, items = [], className, attributes = {}, headingLevel = 3, }) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }
        new DSDSAccordion(ref.current).init();
    });
    return (React.createElement("div", { className: classNames('ds_accordion', className), id: id, ...attributes, ref: ref },
        allowOpenAll && (React.createElement("button", { type: "button", className: "ds_link ds_accordion__open-all js-open-all" },
            "Open all",
            ' ',
            React.createElement("span", { className: "visually-hidden" }, "sections"))),
        items.map((item, index) => {
            const key = `${id}-${item.id}-${index}`;
            return (React.createElement(AccordionItem, { key: key, headingLevel: headingLevel, ...item }));
        })));
};
