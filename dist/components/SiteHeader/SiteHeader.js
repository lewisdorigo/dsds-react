"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Wrapper_1 = __importDefault(require("../Wrapper"));
const SiteBranding_1 = __importDefault(require("../SiteBranding"));
const PhaseBanner_1 = __importDefault(require("../PhaseBanner"));
const SiteNavigation_1 = __importDefault(require("../SiteNavigation"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {SiteHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteHeader = function SiteHead({ className, 'aria-label': ariaLabel = 'Site Header', branding, phase, menuItems, ...props }) {
    return (react_1.default.createElement("header", { className: (0, classNames_1.default)('ds_site-header', className), "aria-label": ariaLabel, ...props },
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement("div", { className: "ds_site-header__content" },
                react_1.default.createElement(SiteBranding_1.default, { ...branding }),
                menuItems && (react_1.default.createElement(SiteNavigation_1.default, { mobile: true, id: "mobile-navigation", "aria-label": "", menuItems: menuItems })))),
        phase && react_1.default.createElement(PhaseBanner_1.default, { ...phase }),
        menuItems && (react_1.default.createElement("div", { className: "ds_site-header__navigation" },
            react_1.default.createElement(Wrapper_1.default, null,
                react_1.default.createElement(SiteNavigation_1.default, { mobile: false, id: "site-navigation", "aria-label": "Main Menu", menuItems: menuItems }))))));
};
exports.default = SiteHeader;
