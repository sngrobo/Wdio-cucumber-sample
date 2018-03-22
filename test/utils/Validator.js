let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let assert = require('chai').assert;
let Utils = require('./Utils');
let utils = new Utils();

class Validator {
	assertTitle(expectedTitle){
	     utils.waitForReadyState(); 
		 var actualTitle = browser.getTitle();
		 return assert.equal(expectedTitle, actualTitle);

		}

	assertVisible(element){
		return assert.isTrue(browser.isVisible(element));
	}	
}

module.exports = Validator;