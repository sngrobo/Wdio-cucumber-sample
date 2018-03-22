let Utils = require('../utils/Utils');
let Validator = require('../utils/Validator');
let utils = new Utils();
let validator = new Validator();

const expectedTitle = "Lloyds Bank - Welcome to Online for Business";

class BusinessLogOnPage {

assertBusinessLogOnPageTitle(){
	validator.assertTitle(expectedTitle);	 
	}
}
module.exports =  BusinessLogOnPage;