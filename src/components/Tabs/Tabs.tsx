'use client';

import React, { useEffect, useRef } from 'react';
import DSDSTabs from '@scottish-government/design-system/src/components/tabs/tabs';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import Heading from '../Heading';

import type { Tabs } from './Tabs.type';

/**
 * @param {Tabs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Tabs:React.FC<Omit<Tabs, 'type'>> = function Tabs({
    items = [],
    label,
    bordered = true,
    id: rawId,
    attributes = {},
    headingLevel = 2,
}) {
    const ref = useRef<HTMLDivElement>(null);
    const id = rawId || 'tabs';

    useEffect(() => {
        if (ref.current) {
            new DSDSTabs(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={classNames(
                'ds_tabs',
            )}
            id={id}
            {...attributes}
            ref={ref}
        >
            { label && (
                <Heading
                    level={headingLevel}
                    className="ds_tabs__title"
                    id={`${id}-title`}
                >
                    { htmlToReact(label, false) }
                </Heading>
            )}

            <nav className="ds_tabs__navigation">
                <ul
                    className="ds_tabs__list"
                    id={`${id}-tablist`}
                    role="tablist"
                    aria-labelledby={`${id}-title`}
                >
                    { items.map(({ id: itemId, label: tabLabel }) => (
                        <li className="ds_tabs__tab" key={`${id}-tablist-${itemId}`}>
                            <a
                                className="ds_tabs__tab-link"
                                href={`#${id}-${itemId}`}
                                aria-controls={`${id}-${itemId}`}
                                id={`#${id}-${itemId}-link`}
                            >
                                { htmlToReact(tabLabel, false) }
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            { items.map(({ id: itemId, content }) => (
                <div
                    className={classNames(
                        'ds_tabs__content',
                        bordered ? 'ds_tabs__content--bordered' : '',
                    )}
                    id={`${id}-${itemId}`}
                    key={`${id}-${itemId}`}
                    aria-labelledby={`#${id}-${itemId}-link`}
                    role="tabpanel"
                >
                    { htmlToReact(content) }
                </div>
            ))}
        </div>
    );
};

export default Tabs;
