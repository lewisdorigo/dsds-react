'use client';
import React, { useEffect, useRef } from 'react';
import DSDSTabs from '@scottish-government/design-system/src/components/tabs/tabs';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
import { Heading } from '../Heading';
/**
 * @param {Types.Tabs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Tabs = function Tabs({ items = [], label, bordered = true, id: rawId, attributes = {}, headingLevel = 2, }) {
    const ref = useRef(null);
    const id = rawId || 'tabs';
    useEffect(() => {
        if (ref.current) {
            new DSDSTabs(ref.current).init();
        }
    }, [ref]);
    return (React.createElement("div", { className: classNames('ds_tabs'), id: id, ...attributes, ref: ref },
        label && (React.createElement(Heading, { level: headingLevel, className: "ds_tabs__title", id: `${id}-title` }, htmlToReact(label, false))),
        React.createElement("nav", { className: "ds_tabs__navigation" },
            React.createElement("ul", { className: "ds_tabs__list", id: `${id}-tablist`, role: "tablist", "aria-labelledby": `${id}-title` }, items.map(({ id: itemId, label: tabLabel }) => (React.createElement("li", { className: "ds_tabs__tab", key: `${id}-tablist-${itemId}` },
                React.createElement("a", { className: "ds_tabs__tab-link", href: `#${id}-${itemId}`, "aria-controls": `${id}-${itemId}`, id: `#${id}-${itemId}-link` }, htmlToReact(tabLabel, false))))))),
        items.map(({ id: itemId, content }) => (React.createElement("div", { className: classNames('ds_tabs__content', bordered ? 'ds_tabs__content--bordered' : ''), id: `${id}-${itemId}`, key: `${id}-${itemId}`, "aria-labelledby": `#${id}-${itemId}-link`, role: "tabpanel" }, htmlToReact(content))))));
};
