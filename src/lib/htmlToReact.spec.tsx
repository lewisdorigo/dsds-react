import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import htmlToReact from './htmlToReact';

test.describe.fixme(
    'HtmlToReact',
    () => {
        test.describe.configure({ retries: 0 });
        test.use({ viewport: { width: 500, height: 500 } });

        test('Empty Input', async ({ mount }) => {
            const content = htmlToReact();
            const component = await mount(<div>{ content }</div>);
            await expect(component).toBeEmpty();
        });

        test('Plain string input', async ({ mount }) => {
            const content = htmlToReact('Hello');
            const component = await mount(<div>{ content }</div>);
            await expect(component).toHaveText('Hello');
        });

        test('HTML string input', async ({ mount }) => {
            const content = htmlToReact('<strong>Hello</strong>');
            const component = await mount(<div>{ content }</div>);

            const html = await component.locator('strong');
            await expect(html).toBeAttached();
            await expect(html).toHaveText('Hello');
        });
    },
);
