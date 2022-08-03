const assert = require('assert');
describe('github page', async () => {

  //ID01
  it('The user cannot register using a previously created account', async () => {
    await browser.url('https://github.com/');
    imp = await $('[class="col-12 my-0 pb-2 pb-sm-0 pr-0 pr-sm-2 flex-auto"]');
    await imp.click();
    input = await $('#user_email');
    await browser.pause(2000);
    await input.addValue('serhiychuk91@gmail.com');
    await browser.pause(3000);
    let signBtn = await $('[class="btn-mktg width-full width-sm-auto btn-signup-mktg"]');
    await signBtn.click();
    await browser.pause(50000);
    let errorMessage = await $('[class="mb-0"]');
    console.log("Error message " + await errorMessage.getText());
  });

  //ID02
  it('After clickin on the "Community" link, the page scrolled to the "Community" blok', async () => {
    await browser.url('https://github.com/');
    const communityLink = await $('[href="#home-community"]');
    await browser.pause(2000);
    communityLink.scrollIntoView();
    await browser.pause(2000);
    comLnk = await $('[href="#home-community"]');
    await comLnk.click();
    await browser.pause(5000);
    const comText = await $('[class="h2-mktg overflow-visible"]');
    let isDisplayedText = await comText.isDisplayed();
    await browser.pause(5000);
    console.log("Text Community DISPLAYED AFTER SCROLLING?: " + await isDisplayedText);
    console.log("Title of the blok 'Community' " + await comText.getText());
  });

  //ID03
  it('After clicking the [Start a free trial] button on main page,  two options appear', async () => {
    await browser.url('https://github.com/');
    const trialBtn = await $('[data-test-selector="start-trial-button"]');
    await browser.pause(2000);
    trialBtn.scrollIntoView();
    await browser.pause(2000);
    await trialBtn.click();
    await browser.pause(5000);
    const enterCloudBtn = await $('//*[text()="Enterprise Cloud"]');
    const enterServerBtn = await $('//*[text()="Enterprise Server"]');
    let isDisplayedCloud = await enterCloudBtn.isDisplayedInViewport();
    let isDisplayedServer = await enterServerBtn.isDisplayedInViewport();
    console.log("Enterprise Cloud is visible " + await isDisplayedCloud);
    console.log("Enterprise Server is visible " + await isDisplayedServer);
    let clickableCloud = await enterCloudBtn.isClickable();
    console.log("IS CLiCKABLE Cloud?: " + clickableCloud);
    let clickableServer = await enterServerBtn.isClickable();
    console.log("IS CLiCKABLE Server?: " + clickableServer);
    await browser.pause(5000);
  });

  //ID04
  it('After clicking the [GitHub] Google Play button, redirected to the [GitHub] page in Google Play', async () => {
    await browser.url('https://github.com/');
    const productBtn = await $('//summary[contains(text(),"Product")]');
    await browser.pause(2000);
    await productBtn.moveTo();
    await browser.pause(2000);
    const mobileLnk = await $('li a[href="/mobile"]');
    await mobileLnk.click();
    await browser.pause(2000);
    const googleBtn = await $('[class="mb-3 mb-lg-0 mr-lg-3"]');
    await googleBtn.click();
    await browser.pause(2000);
    console.log("https://play.google.com/store/apps/details?id=com.github.android =" + await browser.getUrl());
  });

  //ID05
  it('Inputed data in the Search field displayed on the result search page', async () => {
    await browser.url('https://github.com/');
    imp = await $('[class="js-site-search-form"]');
    await imp.click();
    input = await $('label input[placeholder="Search GitHub"]');
    await input.addValue('autotest');
    await browser.pause(3000);
    searchBtn = await $('#jump-to-results');
    await searchBtn.click();
    let searchResult = await $('[data-hydro-click-hmac="d8f78d4b08332e9de537be690b143b51b664b625b41205a4a9159e80ccc25b54"]')
    console.log("Search result equal autotest " + await searchResult.getText())
  });
});
