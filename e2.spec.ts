// e2.spec.ts
import { test } from './fixtures';

test('example test using page object', async ({ pageObject }) => {
  await pageObject.navigateTo('https://playwright.dev/');
  let title: string = await pageObject.getTitle();
  await pageObject.verifyTitle('Playwright enables reliable end-to-end testing for modern web apps.');
  console.log("it is..."+title); // Output the title of the page

  await pageObject.clikLink('Get started');
  await pageObject.verifyTitle('Installation');
  title = await pageObject.getTitle();
  console.log("it is..."+title); // Output the title of the page

});