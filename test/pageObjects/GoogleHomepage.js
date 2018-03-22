let Utils = require('../utils/Utils');
let Validator = require('../utils/Validator');
let utils = new Utils();
let validator = new Validator();

const SEARCHTEXTBOX = '//input[@id="lst-ib"]';
const RESULT = '//a[@href="http://www.halifax.co.uk/"]';

class GoogleHomepage {

	goToGoogleHomepage() {
         utils.launchURL("https://www.google.co.in");
     
	}

	searchText(text) {
         browser.setValue(SEARCHTEXTBOX,text);
         browser.keys('\uE007');//pass enter click
	}

	navigateToResult(){
	     browser.click(RESULT);
	}

}

module.exports =  GoogleHomepage;
