

class Utilities {

    async failTest() {
        await expect(false).toBe(true);
    } 

    async clickAnElement(element) {
        try {
          
          await element.waitForDisplayed();
          await element.click();
        } catch (error) {
          console.log(error);
          this.failTest();
        }
      }
   
    async scrollHorizontal(element) {
        try {
          await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollForward(5)'
          );
          await element.waitForDisplayed();
        } catch (error) {
          console.log(error);
          this.failTest();
        }
    }

    async scrollIntoView(element) {
      try {
        await $(
          'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView("element")'
        );
        await element.waitForDisplayed();
      } catch (error) {
        console.log(error);
        this.failTest();
      }
  }

    async enterText(element, text) {
        try {
          await element.waitForDisplayed();
          await element.clearValue();
          await element.setValue(text);
        } catch (error) {
          console.log(error);
          this.failTest();
        }
    }

    async waitUntilAnElementIsDisplayed(element) {
        try {
          await element.waitUntil(
            async function () {
              return await this.waitForDisplayed();
            },
            {
              timeout: 10000,
              timeoutMsg: "Element not found!!!",
            },
          );
        } catch (error) {
          console.log(error);
          this.failTest();
        }
    }

    async waitUntilAnElementIsClickable(element) {
        try {
          await element.waitUntil(
            async function () {
              return await this.waitForClickable();
            },
            {
              timeout: 10000,
              timeoutMsg: "Element not found!!!",
            },
          );
        } catch (error) {
          console.log(error);
          this.failTest();
        }
    }
    
    async verifyAnElement(element) {
        try {
          await element.waitForDisplayed();
          await expect(element).toBeDisplayed();
        } catch (error) {
          console.log(error);
          this.failTest();
        }
    }


}

export default new Utilities();