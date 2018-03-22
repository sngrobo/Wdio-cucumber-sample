let Utils = require('../utils/Utils');
let Validator = require('../utils/Validator');
let utils = new Utils();
let validator = new Validator();

const expectedTitle = "Halifax UK | Bank Accounts, Savings, Loans & Mortgages";

class HalifaxHomepage {

assertHalifaxHomepageTitle(){
      validator.assertTitle(expectedTitle);
	}
}
module.exports =  HalifaxHomepage;

