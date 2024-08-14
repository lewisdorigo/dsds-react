"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const experimental_ct_react_1 = require("@playwright/experimental-ct-react");
const htmlToReact_1 = __importDefault(require("./htmlToReact"));
experimental_ct_react_1.test.describe.fixme('HtmlToReact', () => {
    experimental_ct_react_1.test.describe.configure({ retries: 0 });
    experimental_ct_react_1.test.use({ viewport: { width: 500, height: 500 } });
    (0, experimental_ct_react_1.test)('Empty Input', async ({ mount }) => {
        const content = (0, htmlToReact_1.default)();
        const component = await mount(react_1.default.createElement("div", null, content));
        await (0, experimental_ct_react_1.expect)(component).toBeEmpty();
    });
    (0, experimental_ct_react_1.test)('Plain string input', async ({ mount }) => {
        const content = (0, htmlToReact_1.default)('Hello');
        const component = await mount(react_1.default.createElement("div", null, content));
        await (0, experimental_ct_react_1.expect)(component).toHaveText('Hello');
    });
    (0, experimental_ct_react_1.test)('HTML string input', async ({ mount }) => {
        const content = (0, htmlToReact_1.default)('<strong>Hello</strong>');
        const component = await mount(react_1.default.createElement("div", null, content));
        const html = await component.locator('strong');
        await (0, experimental_ct_react_1.expect)(html).toBeAttached();
        await (0, experimental_ct_react_1.expect)(html).toHaveText('Hello');
    });
});
