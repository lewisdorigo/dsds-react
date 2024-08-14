"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const WrapperTag_1 = __importDefault(require("./WrapperTag"));
experimental_ct_react_1.test.describe('WrapperTag', () => {
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Default', async ({ mount }) => {
        const component = await mount(react_1.default.createElement(WrapperTag_1.default, { id: "test" }));
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), 'is an `<div>` element').toEqual('div');
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
    (0, experimental_ct_react_1.test)('Nav Element', async ({ mount }) => {
        const tag = 'nav';
        const component = await mount(react_1.default.createElement(WrapperTag_1.default, { id: "test", tag: tag }));
        await (0, experimental_ct_react_1.expect)(await component.evaluate((e) => e.tagName.toLowerCase()), `is an \`<${tag}>\` element`).toEqual(tag);
        await (0, experimental_ct_react_1.expect)(component, 'has expected id').toHaveAttribute('id', 'test');
    });
});
