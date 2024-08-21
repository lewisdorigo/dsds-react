import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { TextInput } from './TextInput';
import * as Types from './TextInput.type';

test.describe('TextInput', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default Input', async ({ mount }) => {
        const component = await mount(
            <TextInput
                type="text"
                id="test"
                name="test"
            />,
        );

        await expect(
            await component.evaluate((e) => e.tagName.toLowerCase()),
            'is an `<input>` element',
        ).toEqual('input');
        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has expected value').toHaveValue('');
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'is expected type').toHaveAttribute('type', 'text');
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Email Input', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
                type="email"
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has expected value').toHaveValue('');
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'is expected type').toHaveAttribute('type', 'email');
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Invalid Type', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
                type="invalid"
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has expected value').toHaveValue('');
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'is expected type').toHaveAttribute('type', 'text');
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Has Initial Value', async ({ mount }) => {
        const component = await mount(
            <TextInput
                type="text"
                id="test"
                name="test"
                value="test"
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has expected value').toHaveValue('test');
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'is expected type').toHaveAttribute('type', 'text');
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });

    test('Disabled', async ({ mount }) => {
        const component = await mount(
            <TextInput
                type="text"
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
            <TextInput
                type="text"
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

    test('Has Set Width', async ({ mount }) => {
        const width = Types.Width.Fixed5;

        const component = await mount(
            <TextInput
                type="text"
                id="test"
                name="test"
                width={width}
            />,
        );

        await expect(component, 'is editable').toBeEditable();
        await expect(component, 'has base class').toHaveClass(/\bds_input\b/);
        await expect(component, 'has width').toHaveClass(new RegExp(`\\bds_input--${width}\\b`));
        await expect(component, 'has expected id').toHaveAttribute('id', 'test');
    });
});
