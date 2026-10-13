// Supported type: TypeScript (.ts)
import { test, expect } from '@playwright/test';

test('typescript type test', async () => {
    const total: number = 1 + 1;
    expect(total).toBe(2);
});
