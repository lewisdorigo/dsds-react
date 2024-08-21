import React from 'react';
import { Wrapper } from '../Wrapper';
import { SiteBranding } from '../SiteBranding';
import { PhaseBanner } from '../PhaseBanner';
import { SiteNavigation } from '../SiteNavigation';
import classNames from '../../lib/classNames';
/**
 * @param {Types.SiteHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteHeader = function SiteHead({ className, 'aria-label': ariaLabel = 'Site Header', branding, phase, menuItems, ...props }) {
    return (React.createElement("header", { className: classNames('ds_site-header', className), "aria-label": ariaLabel, ...props },
        React.createElement(Wrapper, null,
            React.createElement("div", { className: "ds_site-header__content" },
                React.createElement(SiteBranding, { ...branding }),
                menuItems && (React.createElement(SiteNavigation, { mobile: true, id: "mobile-navigation", "aria-label": "", menuItems: menuItems })))),
        phase && React.createElement(PhaseBanner, { ...phase }),
        menuItems && (React.createElement("div", { className: "ds_site-header__navigation" },
            React.createElement(Wrapper, null,
                React.createElement(SiteNavigation, { mobile: false, id: "site-navigation", "aria-label": "Main Menu", menuItems: menuItems }))))));
};
