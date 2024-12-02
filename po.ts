// pageObject.ts
import { Page, expect } from '@playwright/test';

export class PageObject {
  constructor(private page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
	return await this.page.locator('h1').innerText();
  }
  
  async verifyTitle(title: string) {
    await expect(this.page.getByRole('heading',{name: title})).toBeVisible();
  }
   
  async clickButton(selector: string) {
    await this.page.click(selector);
  }

  async inputText(selector: string, text: string) {
    await this.page.fill(selector, text);
  }
  
  async clikLink(link: string){
	await this.page.getByRole('link', { name: link }).click();
  }
}