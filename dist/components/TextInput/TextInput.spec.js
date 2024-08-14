"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const TextInput_1 = __importDefault(require("./TextInput"));
const TextInput_type_1 = require("./TextInput.type");
experimental_ct_react_1.test.describe('TextInput', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default Input', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextInput_1.default, { type: "text", id: "test", name: "test" }));
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'is an `<input>` element').toEqual('input');
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'is expected type').toHaveAttribute('type', 'text');
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Email Input', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextInput_1.default, { id: "test", name: "test", type: "email" }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'is expected type').toHaveAttribute('type', 'email');
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Invalid Type', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextInput_1.default, { id: "test", name: "test", type: "invalid" }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'is expected type').toHaveAttribute('type', 'text');
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Initial Value', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextInput_1.default, { type: "text", id: "test", name: "test", value: "test" }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has expected value').toHaveValue('test');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'is expected type').toHaveAttribute('type', 'text');
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Disabled', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextInput_1.default, { type: "text", id: "test", name: "test", attributes: {
                disabled: true,
            } }));
        await (0, experimental_ct_react_1.expect)(component, 'is not editable').toBeDisabled();
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';
        const component = await mount(react_1.default.createElement(TextInput_1.default, { type: "text", id: "test", name: "test", className: className }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Set Width', async ({ mount }) => {
        const width = TextInput_type_1.InputWidth.Fixed5;
        const component = await mount(react_1.default.createElement(TextInput_1.default, { type: "text", id: "test", name: "test", width: width }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has width').toHaveClass(new RegExp(`\\bds_input--${width}\\b`));
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
});
