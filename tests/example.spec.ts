import { test, expect } from '@playwright/test';

test('Should have a title with text "Hillel Qauto"', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Hillel Qauto');
});

test('Should have h1 with text "Do more!"', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Do more!' })).toBeVisible();
});
