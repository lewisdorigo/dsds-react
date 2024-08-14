"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const HintText_1 = __importDefault(require("./HintText"));
experimental_ct_react_1.test.describe('HintText', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(HintText_1.default, { id: "test" }));
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'is empty').toBeEmpty();
    });
    (0, experimental_ct_react_1.test)('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';
        const component = await mount(react_1.default.createElement(HintText_1.default, { id: "test", className: className }));
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
    });
    (0, experimental_ct_react_1.test)('Has Child Content', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(HintText_1.default, { id: "test" }, "Label Text"));
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has child content').toHaveText('Label Text');
    });
    (0, experimental_ct_react_1.test)('Has Text Content', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(HintText_1.default, { id: "test", content: "Label Text" }));
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has child content').toHaveText('Label Text');
    });
    (0, experimental_ct_react_1.test)('Text Content HTML is Parsed', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(HintText_1.default, { id: "test", content: "Label <strong>Text</strong>" }));
        const htmlLabel = await component.locator('strong');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has child content').toHaveText('Label Text');
        await (0, experimental_ct_react_1.expect)(htmlLabel, 'text label is html').toBeAttached();
    });
});
