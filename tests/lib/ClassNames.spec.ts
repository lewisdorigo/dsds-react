import { test, expect } from '@playwright/test';

import classNames from '../../src/lib/classNames';

test.describe('ClassNames', () => {
    test.describe.configure({ retries: 0 });

    test('Empty classes', async () => {
        const className = classNames();
        await expect(className).toEqual('');
    });

    test('Defined Classes', async () => {
        const className = classNames('firstClass', '', 'secondClass', undefined, 'thirdClass', null);
        await expect(className).toEqual('firstClass secondClass thirdClass');
    });
});
