"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const TextArea_1 = __importDefault(require("./TextArea"));
experimental_ct_react_1.test.describe('TextArea', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextArea_1.default, { id: "test", name: "test" }));
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'is an `<textarea>` element').toEqual('textarea');
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has expected value').toHaveValue('');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Initial Value', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextArea_1.default, { id: "test", name: "test", value: "test" }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has expected value').toHaveValue('test');
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Disabled', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(TextArea_1.default, { id: "test", name: "test", attributes: {
                disabled: true,
            } }));
        await (0, experimental_ct_react_1.expect)(component, 'is not editable').toBeDisabled();
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';
        const component = await mount(react_1.default.createElement(TextArea_1.default, { id: "test", name: "test", className: className }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Set Rows', async ({ mount }) => {
        const rows = 7;
        const component = await mount(react_1.default.createElement(TextArea_1.default, { id: "test", name: "test", attributes: { rows } }));
        await (0, experimental_ct_react_1.expect)(component, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(component, 'has base class').toHaveClass(/\bds_input\b/);
        await (0, experimental_ct_react_1.expect)(component, 'to have rows').toHaveAttribute('rows', rows.toString());
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
});
