"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const Currency_1 = __importDefault(require("./Currency"));
const TextInput_type_1 = require("../TextInput/TextInput.type");
experimental_ct_react_1.test.describe('Currency', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default Input', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Currency_1.default, { id: "test", name: "test" }));
        const input = await component.locator('input');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');
        await (0, experimental_ct_react_1.expect)(input).toBeAttached();
        await (0, experimental_ct_react_1.expect)(input, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(input, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(input, 'has base class').toHaveClass(/\bds_input\b/);
    });
    (0, experimental_ct_react_1.test)('Alternate Symbol', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Currency_1.default, { id: "test", name: "test", symbol: "$" }));
        const input = await component.locator('input');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol', '$');
        await (0, experimental_ct_react_1.expect)(input).toBeAttached();
        await (0, experimental_ct_react_1.expect)(input, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(input, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(input, 'has base class').toHaveClass(/\bds_input\b/);
    });
    (0, experimental_ct_react_1.test)('Has Initial Value', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Currency_1.default, { id: "test", name: "test", value: "test" }));
        const input = await component.locator('input');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');
        await (0, experimental_ct_react_1.expect)(input).toBeAttached();
        await (0, experimental_ct_react_1.expect)(input, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(input, 'has expected value').toHaveValue('test');
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(input, 'has base class').toHaveClass(/\bds_input\b/);
    });
    (0, experimental_ct_react_1.test)('Disabled', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Currency_1.default, { id: "test", name: "test", attributes: {
                disabled: true,
            } }));
        const input = await component.locator('input');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');
        await (0, experimental_ct_react_1.expect)(input).toBeAttached();
        await (0, experimental_ct_react_1.expect)(input, 'is not editable').toBeDisabled();
        await (0, experimental_ct_react_1.expect)(input, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(input, 'has base class').toHaveClass(/\bds_input\b/);
    });
    (0, experimental_ct_react_1.test)('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';
        const component = await mount(react_1.default.createElement(Currency_1.default, { id: "test", name: "test", className: className }));
        const input = await component.locator('input');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');
        await (0, experimental_ct_react_1.expect)(input).toBeAttached();
        await (0, experimental_ct_react_1.expect)(input, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(input, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(input, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(input, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
    });
    (0, experimental_ct_react_1.test)('Has Set Width', async ({ mount }) => {
        const width = TextInput_type_1.InputWidth.Fixed5;
        const component = await mount(react_1.default.createElement(Currency_1.default, { id: "test", name: "test", width: width }));
        const input = await component.locator('input');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');
        await (0, experimental_ct_react_1.expect)(input).toBeAttached();
        await (0, experimental_ct_react_1.expect)(input, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(input, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(input, 'has width').toHaveClass(new RegExp(`\\bds_input--${width}\\b`));
        await (0, experimental_ct_react_1.expect)(input, 'has expected id').toHaveAttribute('id', 'test');
    });
});
