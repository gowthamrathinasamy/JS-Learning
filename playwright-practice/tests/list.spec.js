const { test, expect } = require('@playwright/test');

test('Day 8 - Pagination & Lists', async ({ page }) => {

  await page.goto('https://example.com');

  // Get all items (rows / list)
  const items = page.locator('.table-row');

  // Count items
  const count = await items.count();
  console.log('Total items:', count);

  // Handle No data scenario
  if (count === 0) {
    console.log('No data available');
  } else {
    // Loop through items
    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).innerText();
      console.log(`Item ${i + 1}:`, text);
    }
  }

  // Optional assertion
  expect(count).toBeGreaterThanOrEqual(0);
});
