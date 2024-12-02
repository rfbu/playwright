// fixtures.ts
import { test as base } from '@playwright/test';
import { PageObject } from './po';

export const test = base.extend({
  pageObject: async ({ page }, use) => {
    const pageObject = new PageObject(page);
    await use(pageObject);
  },
});