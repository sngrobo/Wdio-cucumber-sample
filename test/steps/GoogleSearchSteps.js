let {Then, When, Given} = require('cucumber');
let GoogleHomepage = require('../pageObjects/GoogleHomepage');
let HalifaxHomepage = require('../pageObjects/HalifaxHomepage')
let googleHomepage = new GoogleHomepage();
let halifaxHomepage = new HalifaxHomepage();

Given(/^I am on Google homepage$/, function(){
	googleHomepage.goToGoogleHomepage();
});

When(/^I search for text "(.*)"$/, function(searchText){
	googleHomepage.searchText(searchText);
});

When(/^I navigate to the Halifax homepage$/, function(){ 	
	googleHomepage.navigateToResult();
});

Then(/^I should be on the Halifax homepage$/, function(){
 	halifaxHomepage.assertHalifaxHomepageTitle();
});

	