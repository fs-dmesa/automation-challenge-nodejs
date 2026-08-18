import { test, expect } from '@playwright/test';
import { StorefrontPage } from '../src/pages/StorefrontPage';

// Verifies the environment is wired correctly. This test should pass before
// the interview starts - the actual challenge is given during the session.
test('product title is visible on load', async ({ page }) => {
    const storefront = new StorefrontPage(page);
    await storefront.open();
    await storefront.waitForProductTitleVisible();

    const title = (await storefront.productTitle().textContent())?.trim() ?? '';

    expect(title.length).toBeGreaterThan(0);
});
