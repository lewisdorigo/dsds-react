"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Wrapper_1 = __importDefault(require("../../components/Wrapper"));
const WrapperTag_1 = __importDefault(require("../../components/WrapperTag"));
const BackToTop_1 = __importDefault(require("../../components/BackToTop"));
const SkipLinks_1 = __importDefault(require("../../components/SkipLinks"));
const JSEnabled_1 = __importDefault(require("../../helpers/JSEnabled"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {Page} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Page = function Page({ tag = 'div', className, children, top, middle, bottom, wrapMiddle = true, includeBackToTop = true, includeSkipLinks = true, hasHidePage = false, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(JSEnabled_1.default, null),
        hasHidePage && (react_1.default.createElement("div", { className: "visually-hidden ds_hide-page" },
            react_1.default.createElement("p", null, "To leave the page quickly, press the escape key."))),
        includeSkipLinks && react_1.default.createElement(SkipLinks_1.default, null),
        react_1.default.createElement("span", { id: "page-top" }),
        react_1.default.createElement(WrapperTag_1.default, { tag: tag, className: (0, classNames_1.default)('ds_page', className) },
            top && react_1.default.createElement("div", { className: "ds_page__top" }, top),
            (middle || children) && (react_1.default.createElement("div", { className: "ds_page__middle" }, (wrapMiddle
                ? (react_1.default.createElement(Wrapper_1.default, null,
                    middle,
                    children))
                : (react_1.default.createElement(react_1.default.Fragment, null,
                    middle,
                    children))))),
            includeBackToTop && react_1.default.createElement(BackToTop_1.default, null),
            bottom && react_1.default.createElement("div", { className: "ds_page__bottom" }, bottom))));
};
exports.default = Page;
