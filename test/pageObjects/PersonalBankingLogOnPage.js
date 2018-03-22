let Utils = require('../utils/Utils');
let Validator = require('../utils/Validator');
let utils = new Utils();
let validator = new Validator();

const expectedTitle = "Lloyds Bank - Welcome to Internet Banking";

class PersonalBankingLogOnPage {

assertPersonalBankingLogOnPageTitle() {
	validator.assertTitle(expectedTitle);		 
  }
}
module.exports =  PersonalBankingLogOnPage;