import React from 'react';
import { Link } from '../Link';
import { Wrapper } from '../Wrapper';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.SiteFooterLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterLinks = function SiteFooterLinks({ menuItems, }) {
    return (React.createElement("ul", { className: "ds_site-footer__site-items" }, menuItems && menuItems.map((link, index) => {
        if (!link.href) {
            return [];
        }
        const key = `site-foot-links-${index}`;
        return (React.createElement("li", { className: "ds_site-items__item", key: key },
            React.createElement(Link, { ...link, tabText: false })));
    })));
};
/**
 * @param {Types.SiteFooterCopyright} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterCopyright = function SiteFooterCopyright({ logo: { link, ...logo } = {}, content, }) {
    let logoElement;
    if (logo && logo.src && link) {
        logoElement = (React.createElement("a", { className: "copyrightText ds_site-footer-logo", href: link },
            React.createElement("img", { alt: "", ...logo })));
    }
    else if (logo && logo.src) {
        logoElement = (React.createElement("span", { className: "copyrightText ds_site-footer-logo" },
            React.createElement("img", { alt: "", ...logo })));
    }
    return (React.createElement("div", { className: classNames('ds_site-footer__copyright', `ds_site-footer__copyright--${!logoElement ? 'no' : 'has'}-logo`) },
        logoElement,
        content && htmlToReact(content)));
};
/**
 * @param {Types.SiteFooterOrganisation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterOrganisation = function SiteFooterOrg({ logo: { link, ...logo }, }) {
    const logoElem = (React.createElement("img", { alt: "", ...logo }));
    let logoElement;
    if (link) {
        logoElement = (React.createElement("a", { className: "ds_site-footer__org-link", href: link }, logoElem));
    }
    else {
        logoElement = logoElem;
    }
    return (React.createElement("div", { className: "ds_site-footer__org" }, logoElement));
};
/**
 * @param {Types.SiteFooter} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooter = function SiteFooter({ menuItems, copyright, organisation, className, 'aria-label': ariaLabel = 'Site Footer', ...props }) {
    return (React.createElement("footer", { className: classNames('ds_site-footer', className), "aria-label": ariaLabel, ...props },
        React.createElement(Wrapper, null,
            React.createElement("div", { className: "ds_site-footer__content" },
                menuItems && menuItems.length > 0 && (React.createElement(SiteFooterLinks, { menuItems: menuItems })),
                copyright && React.createElement(SiteFooterCopyright, { ...copyright }),
                organisation && React.createElement(SiteFooterOrganisation, { ...organisation })))));
};
