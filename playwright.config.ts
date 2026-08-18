import { defineConfig } from '@playwright/test';
import { DESKTOP_CHROME_USER_AGENT } from './src/support/browserDefaults';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    reporter: 'list',
    use: {
        userAgent: DESKTOP_CHROME_USER_AGENT,
        trace: 'retain-on-failure',
    },
});
