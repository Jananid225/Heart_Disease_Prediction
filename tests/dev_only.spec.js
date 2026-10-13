// This file exists ONLY on the dev branch.
// When Proofline is synced to main, this file must NOT appear.
import { test, expect } from '@playwright/test';

test('dev branch only test', async () => {
    expect('dev').toBe('dev');
});
