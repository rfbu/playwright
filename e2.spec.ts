// e2.spec.ts
import { test } from './fixtures';

test('example test using page object', 
	{tag: ['@first']},
	async ({ pageObject }) => {
	
  await pageObject.navigateTo('https://playwright.dev/');
  const title: string = await pageObject.getTitle();
  await pageObject.verifyTitle('Playwright enables reliable end-to-end testing for modern web apps.');
  console.log("it is..."+title); // Output the title of the page

	//await pageObject.verifyLinkVisible('Playwright');
	await pageObject.verifyLinkVisible('Docs');
	await pageObject.verifyLinkVisible('API');
	await pageObject.verifyButtonVisible('Node.js');
	
	await pageObject.hoverButton('Node.js');
	await pageObject.clikLink('Python');
	await pageObject.verifyTextVisible('Playwright for Python');

	await pageObject.hoverButton('Python');	
	await pageObject.clikLink('Java');
	await pageObject.verifyTextVisible('Playwright for Java');

	await pageObject.hoverButton('Java');
	await pageObject.clikLink('.NET');
	await pageObject.verifyTextVisible('Playwright for .NET');
});

test('todo',
	{tag: ['@todo']}, 
	async ({ pageObject }) => {
	
  await pageObject.navigateTo('https://playwright.dev/');
  
  await pageObject.clikLink('Get started');

  await pageObject.verifyTitle('Installation');
  await pageObject.clikLink('Next Writing tests');
  await pageObject.verifyTitle('Writing tests');

  await pageObject.clikLink('Next Generating tests');  
  await pageObject.verifyTitle('Generating tests');
  
  await pageObject.clikLink('Next Running and debugging tests');
  await pageObject.verifyTitle('Running and debugging tests');
});