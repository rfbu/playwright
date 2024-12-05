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
  
  async verifyLinkVisible(link: string)
  {
    await expect(this.page.getByRole('link', { name: link, exact: true  }).first()).toBeVisible();  
  }
  
  async verifyGenericVisible(link: string)
  {
    await expect(this.page.getByRole('generic', { name: link, exact: true  }).first()).toBeVisible();  
  }

  async verifyTextVisible(link: string)
  {
    await expect(this.page.getByText(link, {exact: true})).toBeVisible();  
  }

  async verifyButtonVisible(link: string)
  {
    await expect(this.page.getByRole('button', { name: link })).toBeVisible();  
  }
  
  async verifyTitle(title: string) {
    await expect(this.page.locator('h1')).toHaveText(title);
  }
   
  async clikButton(title: string){
	await this.page.getByRole('button', { name: title }).click();
  }
  
  async hoverButton(link: string){
	await this.page.getByRole('button', { name: link }).hover();
  }
  
  async clikLink(link: string){
	await this.page.getByRole('link', { name: link }).first().click();
  }

  async hoverLink(link: string){
	await this.page.getByRole('link', { name: link }).hover();
  }
  
  async clikNext(){
	await this.page.getByText(/Next/).click();
  }//flaky
  
  async inputText(selector: string, text: string) {
    await this.page.fill(selector, text);
  }
}