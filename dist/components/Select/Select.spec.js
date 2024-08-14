"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const Select_1 = __importDefault(require("./Select"));
experimental_ct_react_1.test.describe('Select', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Select_1.default, { id: "test", name: "test" }));
        const selectElem = await component.locator('select');
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'wrapper is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has base class').toHaveClass(/\bds_select-wrapper\b/);
        await (0, experimental_ct_react_1.expect)(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await (0, experimental_ct_react_1.expect)(await selectElem.evaluate((e) => e.tagName.toLowerCase()), 'is an `<select>` element').toEqual('select');
        await (0, experimental_ct_react_1.expect)(selectElem, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await (0, experimental_ct_react_1.expect)(selectElem, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(selectElem, 'to be empty').toBeEmpty();
    });
    (0, experimental_ct_react_1.test)('Null Option Enabled', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Select_1.default, { id: "test", name: "test", allowNull: true }));
        const selectElem = await component.locator('select');
        const nullOption = await selectElem.locator('option[value=""]');
        await (0, experimental_ct_react_1.expect)(await selectElem.evaluate((e) => e.tagName.toLowerCase()), 'is an `<select>` element').toEqual('select');
        await (0, experimental_ct_react_1.expect)(selectElem, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await (0, experimental_ct_react_1.expect)(selectElem, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(nullOption, 'has null value').toHaveAttribute('value', '');
        await (0, experimental_ct_react_1.expect)(nullOption, 'null value has label').toHaveAttribute('aria-label');
    });
    (0, experimental_ct_react_1.test)('Null Option Disabled', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Select_1.default, { id: "test", name: "test", allowNull: false }));
        const selectElem = await component.locator('select');
        await (0, experimental_ct_react_1.expect)(await selectElem.evaluate((e) => e.tagName.toLowerCase()), 'is an `<select>` element').toEqual('select');
        await (0, experimental_ct_react_1.expect)(selectElem, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await (0, experimental_ct_react_1.expect)(selectElem, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(selectElem, 'no null element').toBeEmpty();
    });
    (0, experimental_ct_react_1.test)('Options', async ({ mount }) => {
        const items = [
            {
                id: 'test-1',
                label: 'Item 1',
                value: '1',
            },
            {
                id: 'test-2',
                label: 'Item 2',
                value: '2',
            },
            {
                id: 'test-3',
                label: 'Item 3',
                value: '3',
            },
        ];
        const component = await mount(react_1.default.createElement(Select_1.default, { id: "test", name: "test", items: items, allowNull: false }));
        const selectElem = await component.locator('select');
        const options = await selectElem.locator('option');
        await (0, experimental_ct_react_1.expect)(await selectElem.evaluate((e) => e.tagName.toLowerCase()), 'is an `<select>` element').toEqual('select');
        await (0, experimental_ct_react_1.expect)(selectElem, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await (0, experimental_ct_react_1.expect)(selectElem, 'has expected id').toHaveAttribute('id', 'test');
        await (0, experimental_ct_react_1.expect)(options, 'options are present').toHaveCount(3);
        await (0, experimental_ct_react_1.expect)(options.nth(1), 'option has label').toHaveText(items[1].label);
        await (0, experimental_ct_react_1.expect)(options.nth(1), 'option has value').toHaveAttribute('value', items[1].value);
        await (0, experimental_ct_react_1.expect)(options.nth(1), 'option has id').toHaveAttribute('id', items[1].id);
    });
    (0, experimental_ct_react_1.test)('Disabled', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(Select_1.default, { id: "test", name: "test", attributes: {
                disabled: true,
            } }));
        const selectElem = await component.locator('select');
        await (0, experimental_ct_react_1.expect)(selectElem, 'is not editable').toBeDisabled();
        await (0, experimental_ct_react_1.expect)(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await (0, experimental_ct_react_1.expect)(selectElem, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';
        const component = await mount(react_1.default.createElement(Select_1.default, { id: "test", name: "test", className: className }));
        const selectElem = await component.locator('select');
        await (0, experimental_ct_react_1.expect)(selectElem, 'is editable').toBeEditable();
        await (0, experimental_ct_react_1.expect)(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await (0, experimental_ct_react_1.expect)(selectElem, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
        await (0, experimental_ct_react_1.expect)(selectElem, 'has expected id').toHaveAttribute('id', 'test');
    });
});
