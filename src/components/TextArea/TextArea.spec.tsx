import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { TextArea } from './index';

test.describe('TextArea', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default', async ({ mount }) => {
        const component = await mount(
            <TextArea
                id="test"
                name="test"
            />,
        );

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'is an `<textarea>` element',
        ).toEqual('textarea');
        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has expected value').toHaveValue('');
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Has Initial Value', async ({ mount }) => {
        const component = await mount(
            <TextArea
                id="test"
                name="test"
                value="test"
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has expected value').toHaveValue('test');
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Disabled', async ({ mount }) => {
        const component = await mount(
            <TextArea
                id="test"
                name="test"
                attributes={{
                    disabled: true,
                }}
            />,
        );

        await expect(component, 'is not editable').toBeDisabled();
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';

        const component = await mount(
            <TextArea
                id="test"
                name="test"
                className={className}
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Has Set Rows', async ({ mount }) => {
        const rows = 7;

        const component = await mount(
            <TextArea
                id="test"
                name="test"
                attributes={{ rows }}
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'to have rows').toHaveAttribute('rows', rows.toString());
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });
});
