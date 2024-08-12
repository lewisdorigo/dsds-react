import React from 'react';

import Heading from '../Heading';

import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';

import type { ContactDetails } from './ContactDetails.type';

/**
 * @param {ContactDetails} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ContactDetails:React.FC<
    Omit<ContactDetails, 'type'>
> = function ContactDetails({
    id,
    label,
    className,
    headingLevel = 2,
    items = [],
    attributes = {},
}) {
    if (items.length < 1) { return null; }

    return (
        <div
            {...attributes}
            id={id}
            className={classNames(
                'ds_contact-details',
                className,
            )}
        >
            { label && (
                <Heading
                    level={headingLevel}
                    className="ds_contact-details__title"
                >
                    { htmlToReact(label, false) }
                </Heading>
            )}
            <address>
                <dl>
                    { items.map((item, index) => {
                        const key = `${item}-${index}`;
                        return (
                            <div className="ds_contact-details__item" key={key}>
                                <dt>{ htmlToReact(item.label, false) }</dt>
                                { item.items && item.items.map((detail, detailIndex) => {
                                    const detailKey = `${key}-${detailIndex}`;
                                    return (
                                        <dd key={detailKey}>{ htmlToReact(detail, false) }</dd>
                                    );
                                })}
                            </div>
                        );
                    })}
                </dl>
            </address>
        </div>
    );
};

export default ContactDetails;
