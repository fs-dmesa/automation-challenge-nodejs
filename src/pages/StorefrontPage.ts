import { Locator, Page } from '@playwright/test';
import { DEFAULT_TIMEOUT_MS } from '../support/timeouts';

export class StorefrontPage {
    static readonly URL = 'https://qainterviewstore.test.qa7.onfastspring.com/digital-product';

    constructor(private readonly page: Page) {}

    async open(): Promise<this> {
        await this.page.goto(StorefrontPage.URL);
        return this;
    }

    productTitle(): Locator {
        return this.page.locator('.product-title').first();
    }

    async waitForProductTitleVisible(): Promise<this> {
        await this.productTitle().waitFor({ state: 'visible', timeout: DEFAULT_TIMEOUT_MS });
        return this;
    }
}
