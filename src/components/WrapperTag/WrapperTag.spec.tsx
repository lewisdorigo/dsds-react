import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import WrapperTag from './WrapperTag';

test.describe('WrapperTag', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default', async ({ mount }) => {
        const component = await mount(
            <WrapperTag
                id="test"
            />,
        );

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Nav Element', async ({ mount }) => {
        const tag = 'nav';

        const component = await mount(
            <WrapperTag
                id="test"
                tag={tag}
            />,
        );

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            `is an \`<${tag}>\` element`,
        ).toEqual(tag);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });
});
