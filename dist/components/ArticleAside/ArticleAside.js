"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {ArticleAside} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ArticleAside = function ArticleAside({ tag = 'aside', label, content, children, className, headingLevel = 2, attributes = {}, }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, className: (0, classNames_1.default)('ds_article-aside', 'ds_!_margin-top--8', className), ...attributes },
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel }, (0, htmlToReact_1.default)(label, false))),
        content && (0, htmlToReact_1.default)(content),
        children));
};
exports.default = ArticleAside;
