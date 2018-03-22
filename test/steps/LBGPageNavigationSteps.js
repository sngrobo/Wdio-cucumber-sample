var {Given, When, Then} = require('cucumber');
var LBGHomepage = require('../pageObjects/LBGHomepage');
var PersonalBankingLogOnPage = require('../pageObjects/PersonalBankingLogOnPage');
let BusinessLogOnPage = require('../pageObjects/BusinessLogOnPage');
let ContactUsPage = require('../pageObjects/ContactUsPage');

let lBGHomepage = new LBGHomepage();
let personalBankingLogOnPage = new PersonalBankingLogOnPage();
let businessLogOnPage = new BusinessLogOnPage();
let contactUsPage = new ContactUsPage();


Given(/^I am on LBG homepage$/, function(){
	lBGHomepage.goToLBGHomepage();
});

When(/^I navigate to "(.*)" page$/, function(pageName){
	 if (pageName === "Personal banking logon"){
		lBGHomepage.navigateToPersonalBankingPage();
	 }
	 else if (pageName === "Business banking logon"){
	 	lBGHomepage.navigateToBusinessBankingPage();
	 }
	 else{
	 	lBGHomepage.navigateToContactUsPage();
	 }	 	
});

Then(/^I should be on "(.*)" page$/, function(pageName){
 	 if (pageName === "Personal banking logon"){
	 	personalBankingLogOnPage.assertPersonalBankingLogOnPageTitle();
	 }
	 else if (pageName === "Business banking logon"){
	 	businessLogOnPage.assertBusinessLogOnPageTitle();
	 }
	 else{
	 	contactUsPage.assertContactUsPageTitle();
	 	contactUsPage.assertContactUsQueryComponentVisible();
	 }
});

