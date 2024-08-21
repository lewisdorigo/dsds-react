import React from 'react';
import { Link } from '../Link';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.SiteBranding} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteBranding = function SiteBranding({ title, logo, smallLogo, siteName, }) {
    return (React.createElement("div", { className: "ds_site-branding" },
        React.createElement(Link, { className: "ds_site-branding__logo ds_site-branding__link", href: "/" }, (smallLogo
            ? (React.createElement("picture", null,
                React.createElement("source", { srcSet: logo, media: "(min-width: 768px)" }),
                React.createElement("img", { className: "ds_site-branding__logo-image", src: smallLogo, alt: siteName })))
            : (React.createElement("img", { className: "ds_site-branding__logo-image", src: logo, alt: siteName })))),
        title && (React.createElement("div", { className: "ds_site-branding__title" }, htmlToReact(title, false)))));
};
