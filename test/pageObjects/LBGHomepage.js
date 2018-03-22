let Utils = require('../utils/Utils');
let Validator = require('../utils/Validator');
let utils = new Utils();
let validator = new Validator();

const PERSONALBUTTON = "//ul[@class='login-button-list']/li[1]/a[1]";
const BUSINESSBUTTON = "//ul[@class='login-button-list']/li/a[contains(text(),'Business')]";
const CONTACTUS = "//li[@class='primary-header-btn contact-us']/a/span[contains(text(),'Contact Us')]"

class LBGHomepage {

    goToLBGHomepage() {
       utils.launchURL("https://www.lloydsbank.com"); 
       if(browser.getTitle() != 'Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts'){
        browser.deleteCookie();
        browser.refresh();
       }
    }

	navigateToPersonalBankingPage(){
       utils.clickElement(PERSONALBUTTON);
	}

	navigateToBusinessBankingPage(){
       utils.clickElement(BUSINESSBUTTON);
    }

	navigateToContactUsPage(){
       utils.clickElement(CONTACTUS);
	}

}
module.exports =  LBGHomepage;