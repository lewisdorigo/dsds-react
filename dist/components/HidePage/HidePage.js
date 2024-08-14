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
const hide_this_page_1 = __importDefault(require("@scottish-government/design-system/src/components/hide-this-page/hide-this-page"));
/**
 * @param {HidePage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HidePage = function HidePage({ link = 'http://bbc.co.uk/weather', }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!ref.current || !window) {
            return;
        }
        new hide_this_page_1.default(window).init();
        document.body.classList.add('ds_has-hide-page');
    }, [ref]);
    return (react_1.default.createElement("div", { className: "ds_hide-page", ref: ref },
        react_1.default.createElement("a", { href: link, className: "ds_hide-page__button ds_button js-hide-page" },
            react_1.default.createElement("strong", null, "Hide this page"),
            react_1.default.createElement("span", { className: "visually-hidden js-enabled-text" }, "Or press escape key to hide this page")),
        react_1.default.createElement("p", { className: "ds_hide-page__text js-enabled-text" }, "(Or press Esc key)")));
};
exports.default = HidePage;
