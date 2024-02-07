import { When, Then } from '@cucumber/cucumber';
import welcomepage from '../pageobjects/welcomepage.ts';


When(/^I navigate to see more on the Newspaper tab$/, async () => {
    await welcomepage.navigateToNewspaperTab();
    await welcomepage.scrollToSeeMore();
    
});

When(/^I tap to dowload the 6 january 2024 edition from the Archive tab$/, async () => {
    await welcomepage.downloadSixJanuary2004Edition();
});

Then(/^I should see that the Newspaper edition is downloadable$/, async () => {
    await welcomepage.EnterLoginCredentials();
    
});

