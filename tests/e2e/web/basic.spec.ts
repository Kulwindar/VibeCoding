import { test, expect } from '@playwright/test';

test('should load home page', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Check for main content
  const title = page.locator('text=Dashboard');
  await expect(title).toBeVisible();
});

test('should navigate to trips page', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Click on trips link
  const tripsLink = page.locator('text=Trip Requests');
  await expect(tripsLink).toBeVisible();
});
