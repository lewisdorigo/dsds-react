"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Link"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {SiteBranding} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteBranding = function SiteBranding({ title, logo, smallLogo, siteName, }) {
    return (react_1.default.createElement("div", { className: "ds_site-branding" },
        react_1.default.createElement(Link_1.default, { className: "ds_site-branding__logo ds_site-branding__link", href: "/" }, (smallLogo
            ? (react_1.default.createElement("picture", null,
                react_1.default.createElement("source", { srcSet: logo, media: "(min-width: 768px)" }),
                react_1.default.createElement("img", { className: "ds_site-branding__logo-image", src: smallLogo, alt: siteName })))
            : (react_1.default.createElement("img", { className: "ds_site-branding__logo-image", src: logo, alt: siteName })))),
        title && (react_1.default.createElement("div", { className: "ds_site-branding__title" }, (0, htmlToReact_1.default)(title, false)))));
};
exports.default = SiteBranding;
