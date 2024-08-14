"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {PrefilledValues} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PrefilledValues = function PrefilledValues({ items = [], id, label = 'Your current answers', className, attributes = {}, }) {
    return (react_1.default.createElement("dl", { "aria-label": label, ...attributes, className: (0, classNames_1.default)('ds_prefilled-value-list', className), id: id }, items.map((item, index) => {
        const key = `${id}-${index}`;
        return (react_1.default.createElement(react_1.default.Fragment, { key: key },
            react_1.default.createElement("dt", { className: "ds_prefilled-value-list__key" }, (0, htmlToReact_1.default)(item.label, false)),
            react_1.default.createElement("dd", { className: "ds_prefilled-value-list__value" },
                react_1.default.createElement("div", null, (0, htmlToReact_1.default)(item.value, false)),
                ' ',
                item.actions.map((action) => (action && typeof action === 'object' && (0, react_1.isValidElement)(action)
                    ? react_1.default.cloneElement(action, {
                        className: (0, classNames_1.default)('ds_prefilled-value-list__value-actions', action.props.className ? action.props.className : null),
                    })
                    : action)))));
    })));
};
exports.default = PrefilledValues;
