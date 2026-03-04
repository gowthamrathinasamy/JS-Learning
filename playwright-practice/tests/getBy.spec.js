const {test, expect} = require ("@playwright/test");

test('GetBy', async ({page}) => 
{
await page.goto('https://www.youtube.com/');
/*await page.locator(".ytd-logo").first().click();
const musicTab = page.getByLabel("Music");
await musicTab.click();*/
const searchInput = page.getByPlaceholder("Search");
await searchInput.pressSequentially("oorum blood");
await searchInput.press("Enter");
/*const searchButton = page.getByRole('button', { name: 'Search' });
await searchButton.click();*/
//const firstVideo = page.getByRole('heading', { name: 'Oorum Blood - Official Video | Tamil Rockerz | Suriya | Vignesh Shivan | Anirudh Ravichander' });
const firstVideo = page.locator("a[href*='watch']").first();
await firstVideo.click();
/*const ownerChannel = page.getByRole("link", { name: "Think Music India" });
const channelText = await ownerChannel.textContent();
await expect(channelText).toContain("Think Music India");
await ownerChannel.click();*/
await page.pause();
}

)