"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const Label_1 = __importDefault(require("./Label"));
experimental_ct_react_1.test.describe('Label', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Label_1.default, { id: "test", htmlFor: "test-input" }));
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<label>` element').toEqual('label');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_label\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has for').toHaveAttribute('for', 'test-input');
        await (0, experimental_ct_react_1.expect)(component, 'is empty').toBeEmpty();
    });
    (0, experimental_ct_react_1.test)('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';
        const component = await mount(react_1.default.createElement(Label_1.default, { id: "test", htmlFor: "test-input", className: className }));
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_label\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has for').toHaveAttribute('for', 'test-input');
        await (0, experimental_ct_react_1.expect)(component, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
    });
    (0, experimental_ct_react_1.test)('Has Child Content', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Label_1.default, { id: "test", htmlFor: "test-input" }, "Label Text"));
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_label\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has for').toHaveAttribute('for', 'test-input');
        await (0, experimental_ct_react_1.expect)(component, 'has child content').toHaveText('Label Text');
    });
    (0, experimental_ct_react_1.test)('Has Text Content', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Label_1.default, { id: "test", htmlFor: "test-input", content: "Label Text" }));
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_label\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has for').toHaveAttribute('for', 'test-input');
        await (0, experimental_ct_react_1.expect)(component, 'has child content').toHaveText('Label Text');
    });
    (0, experimental_ct_react_1.test)('Text Content HTML is Parsed', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Label_1.default, { id: "test", htmlFor: "test-input", content: "Label <strong>Text</strong>" }));
        const htmlLabel = await component.locator('strong');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_label\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(component, 'has for').toHaveAttribute('for', 'test-input');
        await (0, experimental_ct_react_1.expect)(component, 'has child content').toHaveText('Label Text');
        await (0, experimental_ct_react_1.expect)(htmlLabel, 'text label is html').toBeAttached();
    });
});
