"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("../Icon"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {Pagination} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Pagination = function Pagination({ currentIndex = 0, eachSideOfCurrent = 1, items = [], className, attributes: { 'aria-label': ariaLabel = 'Pages', ...attributes } = {}, }) {
    const previous = currentIndex > 0 ? items[currentIndex - 1] : undefined;
    const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : undefined;
    let last = '';
    return (react_1.default.createElement("nav", { className: (0, classNames_1.default)('ds_pagination', className), "aria-label": ariaLabel, ...attributes },
        react_1.default.createElement("ul", { className: "ds_pagination__list" },
            previous && (react_1.default.createElement("a", { href: previous, className: (0, classNames_1.default)('ds_pagination__link', 'ds_pagination__link--text', 'ds_pagination__link--icon'), "aria-label": "Previous page" },
                react_1.default.createElement(Icon_1.default, { icon: "chevron_left" }),
                react_1.default.createElement("span", { className: "ds_pagination__link-label" }, "Previous"))),
            items.map((page, index) => {
                const key = `page-${index}`;
                const number = index + 1;
                const isCurrent = index === currentIndex;
                const isShown = (index === 0
                    || index === items.length - 1
                    || (index >= currentIndex - eachSideOfCurrent
                        && index <= currentIndex + eachSideOfCurrent));
                if (!isShown && !last) {
                    return null;
                }
                last = isShown ? page : '';
                return (react_1.default.createElement("li", { className: "ds_pagination__item", key: key, "aria-hidden": !isShown ? true : undefined }, (isShown
                    ? (react_1.default.createElement("a", { href: page, className: (0, classNames_1.default)('ds_pagination__link', isCurrent ? 'ds_current' : ''), "aria-label": `Page ${number}`, "aria-current": isCurrent ? 'page' : undefined },
                        react_1.default.createElement("span", { className: "ds_pagination__link-label" }, number)))
                    : (react_1.default.createElement("span", { className: "ds_pagination__link  ds_pagination__link--ellipsis" }, "\u2026")))));
            }),
            next && (react_1.default.createElement("a", { href: next, className: (0, classNames_1.default)('ds_pagination__link', 'ds_pagination__link--text', 'ds_pagination__link--icon'), "aria-label": "Next page" },
                react_1.default.createElement("span", { className: "ds_pagination__link-label" }, "Next"),
                react_1.default.createElement(Icon_1.default, { icon: "chevron_right" }))))));
};
exports.default = Pagination;
