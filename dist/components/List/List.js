"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {List} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const List = function List({ ordered = false, id, className, items = [], attributes, }) {
    if (items.length < 1) {
        return null;
    }
    return (react_1.default.createElement(WrapperTag_1.default, { tag: ordered ? 'ol' : 'ul', className: className, id: id, ...attributes }, items.map((item, index) => {
        const key = `${id || 'list'}-${index}`;
        return (react_1.default.createElement("li", { key: key }, (0, htmlToReact_1.default)(item)));
    })));
};
exports.default = List;
