import React from 'react';

import Link, { Types as LinkTypes } from '../Link';

import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';

import type {
    SequentialNavigation,
    SequentialNavigationItem,
} from './SequentialNavigation.type';

/**
 * @param {SequentialNavigationItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigationItem:React.FC<
    SequentialNavigationItem
> = function SequentialNavigationItem({
    type = 'previous',
    label,
    link,
}) {
    let typeClass:string;
    let side:string;
    let buttonLabel:string;

    switch (type) {
        case 'next':
            typeClass = 'next';
            side = 'right';
            buttonLabel = 'Next';
            break;

        default:
            typeClass = 'prev';
            side = 'left';
            buttonLabel = 'Previous';
            break;
    }

    return (
        <div
            className={classNames(
                'ds_sequential-nav__item',
                `ds_sequential-nav__item--${typeClass}`,
            )}
        >
            <Link
                {...link as LinkTypes.Link}
                baseClass={classNames(
                    'ds_sequential-nav__button',
                    `ds_sequential-nav__button--${side}`,
                )}
            >
                <span className="ds_sequential-nav__text" data-label={buttonLabel}>
                    { htmlToReact(label, false) }
                </span>
            </Link>
        </div>
    );
};

/**
 * @param {SequentialNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SequentialNavigation:React.FC<
    Omit<SequentialNavigation, 'type'>
> = function SequentialNavigation({
    id = 'sequential-navigation',
    items = [],
    className,
    attributes,
}) {
    return (
        <nav
            className={classNames(
                'ds_sequential-nav',
                className,
            )}
            id={id}
            {...attributes}
        >
            { items.map((item, index) => {
                if (index > 1) { return null; }
                const type = index === 0 ? 'previous' : 'next';
                const key = `${id}-${index}`;
                return (
                    <SequentialNavigationItem
                        key={key}
                        {...item}
                        type={type}
                    />
                );
            })}
        </nav>
    );
};

export default SequentialNavigation;