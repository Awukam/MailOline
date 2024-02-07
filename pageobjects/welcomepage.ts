//import { $ } from "webdriverio/build/commands/element";
import utilities from "../helpers/utilities.ts";


class Welcomepage {
    
    get continueButton() {return $('//*[@text="Continue"]');}
    get newspaperAndMagazineContinueBtn() {return $('//android.widget.TextView[@package="com.anmedia.dailymail.kindlefire"]');}
    get forYouContinueBtn() {return $('//*[@text="Continue"]');}
    get puzzelsContibueBtn() {return $('//*[@text="Continue"]');}
    get recentIssuestext() {return $('//*[@text="Recent issues"]');}
    get seeMoreBtn() {return $('//*[@text="SEE MORE"]');}
    get sixJanuary2024Editiontext() {return $('//*[@text="6 January 2024"]');}
    get clickSixJanuary2024DwnLoadBtn() {return $('//*[@id="sourceContainer"]/div/div[3]/div/div/div/div[29]/span[3]/span/span/b');}
    get clickSignInBtn() {return $('#Sign in');}
    get chromeAcceptAndContinueBtn() {return $('#Accept & continue');}
    get emailAddressTextbox() {return $('=login.email');}
    get passwordTextbox() {return $('=login.password');}


    async navigateToNewspaperTab(){
        try {
            //await utilities.waitUntilAnElementIsClickable(this.continueButton);
            await utilities.clickAnElement(this.continueButton);            
            await utilities.clickAnElement($('//android.widget.TextView[@text="Continue"]'));
            //await utilities.waitUntilAnElementIsClickable(this.forYouContinueBtn);
            await utilities.clickAnElement($('//android.view.ViewGroup[@package="com.anmedia.dailymail.kindlefire"]'));
            //await utilities.waitUntilAnElementIsClickable(this.puzzelsContibueBtn);
            await utilities.clickAnElement($('//android.widget.TextView[@package="com.anmedia.dailymail.kindlefire"]'));
        } catch (error) {
            console.log(error);
            utilities.failTest();            
        }
        
    }

    async scrollToSeeMore(){
        try {
            await utilities.waitUntilAnElementIsDisplayed(this.recentIssuestext);
            await utilities.scrollIntoView(this.recentIssuestext);
            await utilities.scrollHorizontal(this.seeMoreBtn);
            await utilities.clickAnElement(this.seeMoreBtn);
        } catch (error) {
            console.log(error);
            utilities.failTest();            
        }
    }

    async downloadSixJanuary2004Edition(){
        try {
            await utilities.waitUntilAnElementIsDisplayed(this.sixJanuary2024Editiontext);
            await utilities.scrollIntoView(this.sixJanuary2024Editiontext);
            await utilities.clickAnElement(this.clickSixJanuary2024DwnLoadBtn);
            await utilities.clickAnElement(this.clickSignInBtn);
        } catch (error) {
            console.log(error);
            utilities.failTest(); 
        }
    }

    async EnterLoginCredentials(){
        try {
             await utilities.enterText(this.emailAddressTextbox, 'mailqatest94@gmail.com');
             await utilities.enterText(this.passwordTextbox, 'World123!');
             await utilities.clickAnElement(this.clickSignInBtn);
        } catch (error) {
            console.log(error);
            utilities.failTest();
        }
    }


}

export default new Welcomepage();