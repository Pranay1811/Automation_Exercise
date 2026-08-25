// Reusables/fixtures.js
import { test as base } from '@playwright/test';

export const test = base.extend({
    page: async ({ page }, use) => {
        await page.route(/googlesyndication|doubleclick|adsbygoogle|googleadservices/, route => route.abort());
        await use(page);
    },
});
export { expect } from '@playwright/test';