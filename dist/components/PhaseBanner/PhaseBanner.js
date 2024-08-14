'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Wrapper_1 = __importDefault(require("../Wrapper"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const Tag_1 = __importDefault(require("../Tag"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {PhaseBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PhaseBanner = function PhaseBanner({ phase = 'alpha', className, children, text, ...props }) {
    return (react_1.default.createElement(WrapperTag_1.default, { className: (0, classNames_1.default)('ds_phase-banner', className), ...props },
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement("div", { className: "ds_phase-banner__content" },
                react_1.default.createElement(Tag_1.default, { className: "ds_phase-banner__tag", tag: "strong" }, phase),
                react_1.default.createElement("span", { className: "ds_phase-banner__text" },
                    text && (0, htmlToReact_1.default)(text, false),
                    children)))));
};
exports.default = PhaseBanner;
