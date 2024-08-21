'use client';
import React, { useEffect, useRef } from 'react';
import MobileMenu from '@scottish-government/design-system/src/components/site-navigation/site-navigation';
import { Link } from '../Link';
import { Icon } from '../Icon';
import classNames from '../../lib/classNames';
/**
 * @param {Types.SiteNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteNavigation = function SiteNavigation({ id = 'site-navigation', className, 'aria-label': ariaLabel = 'Site Navigation', menuItems, mobile = false, ...props }) {
    const ref = useRef(null);
    useEffect(() => {
        if (mobile && typeof window !== 'undefined') {
            new MobileMenu(ref.current).init();
        }
    }, [mobile, ref]);
    if (!menuItems || menuItems.length < 1) {
        return null;
    }
    const navigation = (React.createElement("nav", { id: id, className: classNames('ds_site-navigation', mobile ? 'ds_site-navigation--mobile' : '', className), "aria-label": ariaLabel, ref: ref, ...props },
        React.createElement("ul", { className: "ds_site-navigation__list" }, menuItems.map((item, index) => {
            const key = `${id}-${index}`;
            return (React.createElement("li", { key: key, className: "ds_site-navigation__item" },
                React.createElement(Link, { ...item, baseClass: "ds_site-navigation__link", tabText: false, className: classNames(item.className, item['aria-current'] === 'page'
                        ? 'ds_current'
                        : undefined) })));
        }))));
    if (!mobile) {
        return navigation;
    }
    const menuToggleId = `${id}-toggle`;
    const menuLabelId = `${id}-label`;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "ds_site-header__controls" },
            React.createElement("label", { id: menuLabelId, "aria-controls": id, className: "ds_site-header__control js-toggle-menu", htmlFor: menuToggleId },
                React.createElement("span", { className: "ds_site-header__control-text" }, "Menu"),
                React.createElement(Icon, { icon: "menu", className: "ds_site-header__control-icon" }),
                React.createElement(Icon, { icon: "close", className: "ds_site-header__control-icon ds_site-header__control-icon--active-icon" }))),
        React.createElement("input", { className: "ds_site-navigation__toggle", id: menuToggleId, type: "checkbox", "aria-labelledby": menuLabelId }),
        navigation));
};
