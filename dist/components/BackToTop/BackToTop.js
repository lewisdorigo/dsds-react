'use client';
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
const back_to_top_1 = __importDefault(require("@scottish-government/design-system/src/components/back-to-top/back-to-top"));
const Icon_1 = __importDefault(require("../Icon"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {BackToTop} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const BackToTop = function BackToTop({ top = '#page-top', footer = '.ds_site-footer', content = 'Back to top', className, ...props }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!ref.current || !window) {
            return;
        }
        new back_to_top_1.default(ref.current, window, { footerElSelector: footer }).init();
    }, [ref, footer]);
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_back-to-top', className), ...props, ref: ref },
        react_1.default.createElement("a", { href: top, className: "ds_back-to-top__button" },
            content,
            react_1.default.createElement(Icon_1.default, { className: "ds_back-to-top__icon", icon: "arrow_upward" }))));
};
exports.default = BackToTop;
