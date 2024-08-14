"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteFooterOrg = void 0;
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Link"));
const Wrapper_1 = __importDefault(require("../Wrapper"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {SiteFooterLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteFooterLinks = function SiteFooterLinks({ menuItems, }) {
    return (react_1.default.createElement("ul", { className: "ds_site-footer__site-items" }, menuItems && menuItems.map((link, index) => {
        if (!link.href) {
            return [];
        }
        const key = `site-foot-links-${index}`;
        return (react_1.default.createElement("li", { className: "ds_site-items__item", key: key },
            react_1.default.createElement(Link_1.default, { ...link, tabText: false })));
    })));
};
/**
 * @param {SiteFooterCopyright} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteFooterCopyright = function SiteFooterCopyright({ logo: { link, ...logo } = {}, content, }) {
    let logoElement;
    if (logo && logo.src && link) {
        logoElement = (react_1.default.createElement("a", { className: "copyrightText ds_site-footer-logo", href: link },
            react_1.default.createElement("img", { alt: "", ...logo })));
    }
    else if (logo && logo.src) {
        logoElement = (react_1.default.createElement("span", { className: "copyrightText ds_site-footer-logo" },
            react_1.default.createElement("img", { alt: "", ...logo })));
    }
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_site-footer__copyright', `ds_site-footer__copyright--${!logoElement ? 'no' : 'has'}-logo`) },
        logoElement,
        content && (0, htmlToReact_1.default)(content)));
};
/**
 * @param {SiteFooterOrganisation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteFooterOrg = function SiteFooterOrg({ logo: { link, ...logo }, }) {
    const logoElem = (react_1.default.createElement("img", { alt: "", ...logo }));
    let logoElement;
    if (link) {
        logoElement = (react_1.default.createElement("a", { className: "ds_site-footer__org-link", href: link }, logoElem));
    }
    else {
        logoElement = logoElem;
    }
    return (react_1.default.createElement("div", { className: "ds_site-footer__org" }, logoElement));
};
exports.SiteFooterOrg = SiteFooterOrg;
/**
 * @param {SiteFooter} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteFooter = function SiteFooter({ menuItems, copyright, organisation, className, 'aria-label': ariaLabel = 'Site Footer', ...props }) {
    return (react_1.default.createElement("footer", { className: (0, classNames_1.default)('ds_site-footer', className), "aria-label": ariaLabel, ...props },
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement("div", { className: "ds_site-footer__content" },
                menuItems && menuItems.length > 0 && (react_1.default.createElement(SiteFooterLinks, { menuItems: menuItems })),
                copyright && react_1.default.createElement(SiteFooterCopyright, { ...copyright }),
                organisation && react_1.default.createElement(exports.SiteFooterOrg, { ...organisation })))));
};
exports.default = SiteFooter;
