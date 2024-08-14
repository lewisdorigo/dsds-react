'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Adds 'js-enabled' class to `<html>` on mount and removes on unmount. Does not render content.
 *
 * @returns {null} Null, as it renders nothing.
 */
const JSEnabled = function JSEnabled() {
    (0, react_1.useEffect)(() => {
        const element = document.querySelector('html');
        if (element) {
            element.classList.add('js-enabled');
        }
        return () => {
            if (element) {
                element.classList.remove('js-enabled');
            }
        };
    });
    return null;
};
exports.default = JSEnabled;
