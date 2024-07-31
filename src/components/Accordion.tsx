import React, { useEffect, useRef } from 'react';

import DSDSAccordion from '@scottish-government/design-system/src/components/accordion/accordion';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Accordion.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AccordionItem:React.FC<DSDS.Component.Accordion.Item> = function AccordionItem({
    id,
    label,
    content,
    attributes,
}) {
    return (
        <div
            className="ds_accordion-item"
            id={id}
            {...attributes}
        >
            <input
                type="checkbox"
                className="visually-hidden ds_accordion-item__control"
                id={`${id}-control`}
                aria-labelledby={`${id}-heading`}
                aria-controls={`${id}-content`}
            />
            <div className="ds_accordion-item__header">
                <h3
                    id={`${id}-heading`}
                    className="ds_accordion-item__title"
                >
                    { label }
                </h3>
                <span className="ds_accordion-item__indicator" />
                <label // eslint-disable-line jsx-a11y/label-has-associated-control
                    className="ds_accordion-item__label"
                    htmlFor={`${id}-control`}
                >
                    <span className="visually-hidden">Show this section</span>
                </label>
            </div>
            <div
                className="ds_accordion-item__body"
                aria-labelledby={`${id}-content`}
            >
                { htmlToReact(content) }
            </div>
        </div>
    );
};

/**
 * @param {DSDS.Component.Accordion} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Accordion:React.FC<Omit<DSDS.Component.Accordion, 'type'>> = function Accordion({
    id,
    allowOpenAll = true,
    items = [],
    className,
    attributes = {},
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }

        const accordion = new DSDSAccordion(ref.current);

        accordion.init();
    });

    return (
        <div
            className={classNames(
                'ds_accordion',
                className,
            )}
            id={id}
            {...attributes}
            ref={ref}
        >
            {allowOpenAll && (
                <button
                    type="button"
                    className="ds_link ds_accordion__open-all js-open-all"
                >
                    Open all
                    {' '}
                    <span className="visually-hidden">sections</span>
                </button>
            )}
            {items.map((item, index) => {
                const key = `${id}-${item.id}-${index}`;
                return (
                    <AccordionItem
                        key={key}
                        {...item}
                    />
                );
            })}
        </div>
    );
};

export default Accordion;
