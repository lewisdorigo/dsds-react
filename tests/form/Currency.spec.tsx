import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import Currency from '../../src/form/Currency';
import { InputWidth } from '../../src/lib/enums';

test.describe('Currency', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default Input', async ({ mount }) => {
        const component = await mount(
            <Currency
                id="test"
                name="test"
            />,
        );

        const input = await component.locator('input');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await expect(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');

        await expect(input).toBeAttached();
        await expect(input, 'is editable').toBeEditable();
        await expect(input, 'has expected value').toHaveValue('');
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
        await expect(input, 'has base class').toHaveClass(/\bds_input\b/);
    });

    test('Alternate Symbol', async ({ mount }) => {
        const component = await mount(
            <Currency
                id="test"
                name="test"
                symbol="$"
            />,
        );

        const input = await component.locator('input');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await expect(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol', '$');

        await expect(input).toBeAttached();
        await expect(input, 'is editable').toBeEditable();
        await expect(input, 'has expected value').toHaveValue('');
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
        await expect(input, 'has base class').toHaveClass(/\bds_input\b/);
    });

    test('Has Initial Value', async ({ mount }) => {
        const component = await mount(
            <Currency
                id="test"
                name="test"
                value="test"
            />,
        );

        const input = await component.locator('input');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await expect(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');

        await expect(input).toBeAttached();
        await expect(input, 'is editable').toBeEditable();
        await expect(input, 'has expected value').toHaveValue('test');
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
        await expect(input, 'has base class').toHaveClass(/\bds_input\b/);
    });

    test('Disabled', async ({ mount }) => {
        const component = await mount(
            <Currency
                id="test"
                name="test"
                attributes={{
                    disabled: true,
                }}
            />,
        );

        const input = await component.locator('input');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await expect(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');

        await expect(input).toBeAttached();
        await expect(input, 'is not editable').toBeDisabled();
        await expect(input, 'has expected value').toHaveValue('');
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
        await expect(input, 'has base class').toHaveClass(/\bds_input\b/);
    });

    test('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';

        const component = await mount(
            <Currency
                id="test"
                name="test"
                className={className}
            />,
        );

        const input = await component.locator('input');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await expect(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');

        await expect(input).toBeAttached();
        await expect(input, 'is editable').toBeEditable();
        await expect(input, 'has expected value').toHaveValue('');
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
        await expect(input, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(input, 'has additional classes').toHaveClass(new RegExp(`\\b${className}\\b`));
    });

    test('Has Set Width', async ({ mount }) => {
        const width = InputWidth.Fixed5;

        const component = await mount(
            <Currency
                id="test"
                name="test"
                width={width}
            />,
        );

        const input = await component.locator('input');

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'wrapper is an `<div>` element',
        ).toEqual('div');
        await expect(component, 'wrapper has base class').toHaveClass(/\bds_currency-wrapper\b/);
        await expect(component, 'wrapper has expected id').toHaveAttribute('id', 'test-wrapper');
        await expect(component, 'wrapper has expected symbol').toHaveAttribute('data-symbol');

        await expect(input).toBeAttached();
        await expect(input, 'is editable').toBeEditable();
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
        await expect(input, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(input, 'has width').toHaveClass(new RegExp(`\\bds_input--${width}\\b`));
        await expect(input, 'has expected id').toHaveAttribute('id', 'test');
    });
});
