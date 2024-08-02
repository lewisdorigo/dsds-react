import React from 'react';

import Link from './Link';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Breadcrumbs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Breadcrumbs:React.FC<Omit<DSDS.Component.Breadcrumbs, 'type'>> = function Breadcrumbs({
    items = [],
    id = 'breadcrumbs',
    hideCurrent = false,
    className,
    attributes: {
        'aria-label': ariaLabel = 'Breadcrumbs',
        ...attributes
    } = {},
}) {
    return (
        <nav
            className={className}
            id={id}
            {...attributes}
            aria-label={ariaLabel}
        >
            <ol className="ds_breadcrumbs">
                { items.map((item, index) => {
                    const key = `${id}-${index}`;
                    const current = index === items.length - 1;

                    return (
                        <li
                            key={key}
                            className={classNames(
                                'ds_breadcrumbs__item',
                                current && hideCurrent ? 'visually-hidden' : undefined,
                            )}
                        >
                            {(
                                current
                                    ? (
                                        <>
                                            { item.content && htmlToReact(item.content, false) }
                                            { item.children }
                                        </>
                                    )
                                    : (
                                        <Link
                                            {...item}
                                            baseClass="ds_breadcrumbs__link"
                                            tabText={false}
                                            aria-current={current ? 'page' : undefined}
                                        />
                                    )
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
