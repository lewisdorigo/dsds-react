'use client';

import React, { useEffect, useRef } from 'react';
import MobileMenu from '@scottish-government/design-system/src/components/site-navigation/site-navigation';

import Link from './Link';
import Icon from './Icon';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.SiteNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteNavigation:React.FC<DSDS.Component.SiteNavigation> = function SiteNavigation({
    id = 'site-navigation',
    className,
    'aria-label': ariaLabel = 'Site Navigation',
    menuItems,
    mobile = false,
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (mobile && typeof window !== 'undefined') {
            new MobileMenu(ref.current).init();
        }
    }, [mobile, ref]);

    if (!menuItems || menuItems.length < 1) {
        return null;
    }

    const navigation = (
        <nav
            id={id}
            className={classNames(
                'ds_site-navigation',
                mobile ? 'ds_site-navigation--mobile' : '',
                className,
            )}
            aria-label={ariaLabel}
            ref={ref}
            {...props}
        >
            <ul className="ds_site-navigation__list">
                { menuItems.map((item, index) => {
                    const key = `${id}-${index}`;
                    return (
                        <li key={key} className="ds_site-navigation__item">
                            <Link
                                {...item}
                                baseClass="ds_site-navigation__link"
                                tabText={false}
                                className={classNames(
                                    item.className,
                                    item['aria-current'] === 'page'
                                        ? 'ds_current'
                                        : undefined,
                                )}
                            />
                        </li>
                    );
                }) }
            </ul>
        </nav>
    );

    if (!mobile) {
        return navigation;
    }

    const menuToggleId = `${id}-toggle`;
    const menuLabelId = `${id}-label`;

    return (
        <>
            <div className="ds_site-header__controls">
                { /* eslint-disable jsx-a11y/label-has-associated-control */ }
                <label
                    id={menuLabelId}
                    aria-controls={id}
                    className="ds_site-header__control js-toggle-menu"
                    htmlFor={menuToggleId}
                >
                    <span className="ds_site-header__control-text">Menu</span>
                    <Icon
                        icon="menu"
                        className="ds_site-header__control-icon"
                    />
                    <Icon
                        icon="close"
                        className="ds_site-header__control-icon ds_site-header__control-icon--active-icon"
                    />
                </label>
                { /* eslint-enable jsx-a11y/label-has-associated-control */ }
            </div>

            <input
                className="ds_site-navigation__toggle"
                id={menuToggleId}
                type="checkbox"
                aria-labelledby={menuLabelId}
            />

            { navigation }
        </>
    );
};

export default SiteNavigation;
