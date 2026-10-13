// Sub-folder test: tests/smoke/login.spec.js
import { test, expect } from '@playwright/test';

test('smoke - page has a title', async ({ page }) => {
    await page.goto(process.env.WEB_URL || 'https://example.com');
    expect(await page.title()).not.toBe('');
});
