import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import Select from '../../src/form/Select';

test.describe('Select', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default', async ({ mount }) => {
        const component = await mount(
            <Select
                id="test"
                name="test"
            />,
        );

        const selectElem = await component.locator('select');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_select-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');

        await expect(
            await selectElem.evaluate((e) => e.tagName.toLowerCase()),
            'is an `<select>` element',
        ).toEqual('select');
        await expect(selectElem, 'is editable').toBeEditable();
        await expect(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await expect(selectElem, 'has expected id').toHaveAttribute('id', 'test');
        await expect(selectElem, 'to be empty').toBeEmpty();
    });

    test('Null Option Enabled', async ({ mount }) => {
        const component = await mount(
            <Select
                id="test"
                name="test"
                allowNull
            />,
        );

        const selectElem = await component.locator('select');
        const nullOption = await selectElem.locator('option[value=""]');

        await expect(
            await selectElem.evaluate((e) => e.tagName.toLowerCase()),
            'is an `<select>` element',
        ).toEqual('select');
        await expect(selectElem, 'is editable').toBeEditable();
        await expect(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await expect(selectElem, 'has expected id').toHaveAttribute('id', 'test');

        await expect(nullOption, 'has null value').toHaveAttribute('value', '');
        await expect(nullOption, 'null value has label').toHaveAttribute('aria-label');
    });

    test('Options', async ({ mount }) => {
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
        const component = await mount(
            <Select
                id="test"
                name="test"
                items={items}
            />,
        );

        const selectElem = await component.locator('select');
        const options = await selectElem.locator('option');

        await expect(
            await selectElem.evaluate((e) => e.tagName.toLowerCase()),
            'is an `<select>` element',
        ).toEqual('select');
        await expect(selectElem, 'is editable').toBeEditable();
        await expect(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await expect(selectElem, 'has expected id').toHaveAttribute('id', 'test');

        await expect(options, 'options are present').toHaveCount(3);
        await expect(options.nth(1), 'option has label').toHaveText(items[1].label);
        await expect(options.nth(1), 'option has value').toHaveAttribute('value', items[1].value);
        await expect(options.nth(1), 'option has id').toHaveAttribute('id', items[1].id);
    });

    test('Disabled', async ({ mount }) => {
        const component = await mount(
            <Select
                id="test"
                name="test"
                attributes={{
                    disabled: true,
                }}
            />,
        );

        const selectElem = await component.locator('select');

        await expect(selectElem, 'is not editable').toBeDisabled();
        await expect(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await expect(selectElem, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';

        const component = await mount(
            <Select
                id="test"
                name="test"
                className={className}
            />,
        );

        const selectElem = await component.locator('select');
        await expect(selectElem, 'is editable').toBeEditable();
        await expect(selectElem, 'has base class').toHaveClass(/\bds_select\b/);
        await expect(selectElem, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
        await expect(selectElem, 'has expected id').toHaveAttribute('id', 'test');
    });
});
