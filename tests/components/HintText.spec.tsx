import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import HintText from '../../src/components/HintText';

test.describe('HintText', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default', async ({ mount }) => {
        const component = await mount(
            <HintText
                id="test"
            />,
        );

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
        await expect(component, 'is empty').toBeEmpty();
    });

    test('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';

        const component = await mount(
            <HintText
                id="test"
                className={className}
            />,
        );

        await expect(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
        await expect(component, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
    });

    test('Has Child Content', async ({ mount }) => {
        const component = await mount(
            <HintText
                id="test"
            >
                Label Text
            </HintText>,
        );

        await expect(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
        await expect(component, 'has child content').toHaveText('Label Text');
    });

    test('Has Text Content', async ({ mount }) => {
        const component = await mount(
            <HintText
                id="test"
                text="Label Text"
            />,
        );

        await expect(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
        await expect(component, 'has child content').toHaveText('Label Text');
    });

    test('Text Content HTML is Parsed', async ({ mount }) => {
        const component = await mount(
            <HintText
                id="test"
                text="Label <strong>Text</strong>"
            />,
        );

        const htmlLabel = await component.locator('strong');

        await expect(component, 'has base class').toHaveClass(/\bds_hint-text\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
        await expect(component, 'has child content').toHaveText('Label Text');

        await expect(htmlLabel, 'text label is html').toBeAttached();
    });
});
