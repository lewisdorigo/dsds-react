import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import TextInput from '../../src/form/TextInput';
import { InputWidth } from '../../src/lib/enums';

test.describe('TextInput', () => {
    test.use({ viewport: { width: 500, height: 500 } });

    test('Default Input', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
            />,
        );

        await expect(component).toBeEditable();
        await expect(component).toHaveValue('');
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveAttribute('type', 'text');
        await expect(component).toHaveAttribute('id', 'test');
    });

    test('Email Input', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
                type="email"
            />,
        );

        await expect(component).toBeEditable();
        await expect(component).toHaveValue('');
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveAttribute('type', 'email');
        await expect(component).toHaveAttribute('id', 'test');
    });

    test('Invalid Type', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
                type="invalid"
            />,
        );

        await expect(component).toBeEditable();
        await expect(component).toHaveValue('');
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveAttribute('type', 'text');
        await expect(component).toHaveAttribute('id', 'test');
    });

    test('Has Initial Value', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
                value="test"
            />,
        );

        await expect(component).toBeEditable();
        await expect(component).toHaveValue('test');
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveAttribute('type', 'text');
        await expect(component).toHaveAttribute('id', 'test');
    });

    test('Disabled', async ({ mount }) => {
        const component = await mount(
            <TextInput
                id="test"
                name="test"
                attributes={{
                    disabled: true,
                }}
            />,
        );

        await expect(component).toBeDisabled();
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveAttribute('id', 'test');
    });

    test('Has Additional Class', async ({ mount }) => {
        const className = 'text-class';

        const component = await mount(
            <TextInput
                id="test"
                name="test"
                className={className}
            />,
        );

        await expect(component).toBeEditable();
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveClass(new RegExp(`\\b${className}\\b`));
        await expect(component).toHaveAttribute('id', 'test');
    });

    test('Has Set Width', async ({ mount }) => {
        const width = InputWidth.Fixed5;

        const component = await mount(
            <TextInput
                id="test"
                name="test"
                width={width}
            />,
        );

        await expect(component).toBeEditable();
        await expect(component).toHaveClass(/\bds_input\b/);
        await expect(component).toHaveClass(new RegExp(`\\bds_input--${width}\\b`));
        await expect(component).toHaveAttribute('id', 'test');
    });
});
