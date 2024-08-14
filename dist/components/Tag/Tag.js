'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
/**
 * @param {Tag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Tag = function Tag({ className, children, ...props }) {
    return (react_1.default.createElement(WrapperTag_1.default, { className: (0, classNames_1.default)('ds_tag', className), ...props }, children));
};
exports.default = Tag;
