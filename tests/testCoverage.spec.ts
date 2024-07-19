import { test, expect } from '@playwright/test';
import { readdir } from 'node:fs/promises';
import path from 'path';

const getTestCoverage = async () => {
    const sourceFiles = await readdir('./src', {
        recursive: true,
        withFileTypes: true,
    });

    const testFiles = await readdir('./tests', {
        recursive: true,
    });

    let numFiles = 0;
    let numTests = 0;
    const notCovered:string[] = [];

    sourceFiles.forEach((file) => {
        if (
            !file.isFile()
            || file.name.startsWith('.')
        ) {
            return;
        }

        const fileExtension = path.extname(file.name);

        if (!['.ts', '.tsx', '.js', '.jsx'].includes(fileExtension)) {
            return;
        }

        numFiles += 1;

        const basename = path.basename(
            file.name,
            fileExtension,
        );

        const filePath = path.join(
            file.parentPath.replace(/^\.?\/?src\/?/, ''),
            basename,
        );

        const hasTest = testFiles.findIndex((value) => (
            value.toLowerCase().startsWith(`${filePath.toLowerCase()}.spec`)
        )) > -1;

        if (hasTest) {
            numTests += 1;
        } else {
            notCovered.push(filePath);
        }
    });

    return {
        files: numFiles,
        tests: numTests,
        coverage: numTests / numFiles,
        notCovered,
    };
};

test.describe('Test Coverage', async () => {
    const testCoverage = await getTestCoverage();
    let mode = 'log';

    if (testCoverage.coverage <= 0.5) {
        mode = 'error';
    } else if (testCoverage.coverage <= 0.8) {
        mode = 'warn';
    }

    console[mode](`Coverage: ${testCoverage.tests} tests for ${testCoverage.files} files`);
    console[mode](`Coverage: ${Math.round(testCoverage.coverage * 100)}%`);

    if (testCoverage.notCovered.length > 0) {
        console[mode]('\r\nFiles without tests:');
        testCoverage.notCovered.forEach((file) => console[mode](`- ${file}`));
    }

    console.log('\r\n');
});
