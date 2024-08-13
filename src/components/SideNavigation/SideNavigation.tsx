'use client';

import React, { useRef, useEffect } from 'react';

import SideNav from '@scottish-government/design-system/src/components/side-navigation/side-navigation';

import Link from '../Link';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type {
    SideNavigationList,
    SideNavigation,
} from './SideNavigation.type';

/**
 * @param {SideNavigationList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SideNavigationList:React.FC<
    SideNavigationList
> = function SideNavigationList({
    id = 'side-navigation',
    level = 0,
    items,
}) {
    const idName = `${id}-${level}`;
    return (
        <ul className="ds_side-navigation__list" id={idName}>
            { items.map(({
                items: children,
                className,
                current,
                ...link
            }, index) => {
                const key = `${id}-${index}`;

                return (
                    <li
                        key={key}
                        className={classNames(
                            'ds_side-navigation__item',
                            (
                                children && children.length
                                    ? 'ds_side-navigation__item--has-children'
                                    : ''
                            ),
                            (
                                children && children.length
                                    ? 'ds_side-navigation__item--has-children--expanded'
                                    : ''
                            ),
                        )}
                    >
                        <Link
                            tabText={false}
                            {...link}
                            className={classNames(
                                current ? 'ds_current' : '',
                                className,
                            )}
                            baseClass="ds_side-navigation__link"
                            aria-current={current ? 'page' : undefined}
                        />

                        { children && children.length > 0 && (
                            <SideNavigationList
                                id={key}
                                level={level + 1}
                                items={children}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

/**
 * @param {SideNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SideNavigation:React.FC<
    Omit<SideNavigation, 'type'>
> = function SideNavigation({
    items = [],
    id = 'side-navigation',
    label = 'Pages in this section',
    className,
    attributes: {
        'aria-label': ariaLabel = 'Sections',
        ...attributes
    } = {},
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }

        new SideNav(ref.current).init();
    }, [ref]);

    return (
        <nav
            className={classNames(
                'ds_side-navigation',
                className,
            )}
            aria-label={ariaLabel}
            id={id}
            {...attributes}
            ref={ref}
        >
            <input
                type="checkbox"
                className="fully-hidden js-toggle-side-navigation"
                id={`show-${id}`}
                aria-controls={`${id}-0`}
            />
            { /* eslint-disable jsx-a11y/label-has-associated-control */ }
            <label
                className="ds_side-navigation__expand ds_link"
                htmlFor={`show-${id}`}
            >
                <span className="visually-hidden">Show all</span>
                { htmlToReact(label) }
                <span className="ds_side-navigation__expand-indicator" />
            </label>
            { /* eslint-enable jsx-a11y/label-has-associated-control */ }

            <SideNavigationList id={id} level={0} items={items} />
        </nav>
    );
};

export default SideNavigation;
