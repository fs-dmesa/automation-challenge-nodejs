import { defineConfig } from '@playwright/test';
import { DESKTOP_CHROME_USER_AGENT } from './src/support/browserDefaults';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    // 'list' prints to the console as tests run; 'html' writes the interactive report
    // opened with `npx playwright show-report`.
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        userAgent: DESKTOP_CHROME_USER_AGENT,
        // 'on' keeps a trace for every test, pass or fail.
        trace: 'on',
    },
});
