import {test, expect} from '@playwright/test';

test('should display the correct title', async ({page}) => {
    
    await page.goto('/');
    
    // const [response] = await Promise.all([
    //     page.goto('/'),
    //     page.waitForResponse(response => response.url() === 'http://localhost:3000' && response.status() === 200), // Replace with your actual API URL
    // ]);
    // if (response) {
    //     await expect(response.status()).toBe(200);
    // } else {
    //     throw new Error('Response is null');
    // }
    
    const a = page.locator('a.font-semibold');
    await expect(a).toContainText('Anand Palukuri');
});


test('should have a header with the correct links', async ({page}) => {
  await page.goto('/');

    const header = page.locator('header');
    await expect(header.getByRole('link', { name: 'Anand Palukuri' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Experience' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Resume' })).toBeVisible();
});

test('should have links that take me to the right pages', async ({page}) => {
  const response = await page.goto('/');
  await expect(response?.status()).toBe(200);

  await expect(page).toHaveURL('http://localhost:3000/');
  const header = page.locator('header');
  
  // Capture response after clicking the link
  const [navigationResponse] = await Promise.all([
    page.waitForResponse(response => response.url().includes('/projects') && response.status() === 200),
    header.getByRole('link', { name: 'Projects' }).click(),
  ]);
  
  // Check that the navigation response is 200
  await expect(navigationResponse.status()).toBe(200);
  
  // Wait for the navigation to complete
  await page.waitForLoadState('networkidle');
  
  // Check that the page loaded successfully
  await expect(page).toHaveURL('/projects');
});