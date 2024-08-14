"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {SkipLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SkipLinks = function SkipLinks({ mainContent = '#main-content', items = [], className, ...props }) {
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_skip-links', className), ...props },
        react_1.default.createElement("ul", { className: "ds_skip-links__list" },
            react_1.default.createElement("li", { className: "ds_skip-links__item" },
                react_1.default.createElement("a", { href: mainContent, className: "ds_skip-links__link" }, "Skip to main content")),
            items.map(({ href, label }, index) => {
                const key = `skip-links-${index}`;
                return (react_1.default.createElement("li", { className: "ds_skip-links__item", key: key },
                    react_1.default.createElement("a", { href: href, className: "ds_skip-links__link" }, label)));
            }))));
};
exports.default = SkipLinks;
