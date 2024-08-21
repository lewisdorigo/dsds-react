import React from 'react';

import { Icon } from '../Icon';

import classNames from '../../lib/classNames';

import type * as Types from './Pagination.type';

/**
 * @param {Types.Pagination} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Pagination:React.FC<Omit<Types.Pagination, 'type'>> = function Pagination({
    currentIndex = 0,
    eachSideOfCurrent = 1,
    items = [],
    className,
    attributes: {
        'aria-label': ariaLabel = 'Pages',
        ...attributes
    } = {},
}) {
    const previous = currentIndex > 0 ? items[currentIndex - 1] : undefined;
    const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : undefined;

    let last:string = '';

    return (
        <nav
            className={classNames(
                'ds_pagination',
                className,
            )}
            aria-label={ariaLabel}
            {...attributes}
        >
            <ul className="ds_pagination__list">
                { previous && (
                    <a
                        href={previous}
                        className={classNames(
                            'ds_pagination__link',
                            'ds_pagination__link--text',
                            'ds_pagination__link--icon',
                        )}
                        aria-label="Previous page"
                    >
                        <Icon icon="chevron_left" />
                        <span className="ds_pagination__link-label">
                            Previous
                        </span>
                    </a>
                )}
                { items.map((page, index) => {
                    const key = `page-${index}`;
                    const number = index + 1;
                    const isCurrent = index === currentIndex;
                    const isShown = (
                        index === 0
                        || index === items.length - 1
                        || (
                            index >= currentIndex - eachSideOfCurrent
                            && index <= currentIndex + eachSideOfCurrent
                        )
                    );

                    if (!isShown && !last) {
                        return null;
                    }

                    last = isShown ? page : '';

                    return (
                        <li
                            className="ds_pagination__item"
                            key={key}
                            aria-hidden={!isShown ? true : undefined}
                        >
                            {(
                                isShown
                                    ? (
                                        <a
                                            href={page}
                                            className={classNames(
                                                'ds_pagination__link',
                                                isCurrent ? 'ds_current' : '',
                                            )}
                                            aria-label={`Page ${number}`}
                                            aria-current={isCurrent ? 'page' : undefined}
                                        >
                                            <span className="ds_pagination__link-label">
                                                { number }
                                            </span>
                                        </a>
                                    )
                                    : (
                                        <span
                                            className="ds_pagination__link  ds_pagination__link--ellipsis"
                                        >
                                            &hellip;
                                        </span>
                                    )
                            )}
                        </li>
                    );
                })}
                { next && (
                    <a
                        href={next}
                        className={classNames(
                            'ds_pagination__link',
                            'ds_pagination__link--text',
                            'ds_pagination__link--icon',
                        )}
                        aria-label="Next page"
                    >
                        <span className="ds_pagination__link-label">
                            Next
                        </span>
                        <Icon icon="chevron_right" />
                    </a>
                )}
            </ul>
        </nav>
    );
};
