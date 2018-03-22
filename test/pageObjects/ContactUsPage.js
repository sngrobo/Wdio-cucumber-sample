let Utils = require('../utils/Utils');
let Validator = require('../utils/Validator');
let utils = new Utils();
let validator = new Validator();
const option1 = "//div[@class='title-wrapper']/h3[contains(text(),'I want to call Lloyds Bank')]";
const option2 = "//div[@class='title-wrapper']/h3[contains(text(),'My card is lost or stolen')]";
const option3 = "//div[@class='title-wrapper']/h3[contains(text(),'noticed suspicious activity')]";
const option4 = "//div[@class='title-wrapper']/h3[contains(text(),'Ask a question')]";
const option5 = "//div[@class='title-wrapper']/h3[contains(text(),'Self Service')]";
const option6 = "//div[@class='title-wrapper']/h3[contains(text(),'Make a complaint')]";
const expectedTitle = "Lloyds Bank - Contact Information - Phone Numbers, Branch Info & More";

class ContactUsPage {

  assertContactUsPageTitle(){
  	//application has some rendering error for homepage as it uses cookies, so have to refresh and delete cookies
    browser.deleteCookie();
    browser.refresh();			 
	validator.assertTitle(expectedTitle);
  }

  assertContactUsQueryComponentVisible(){		
	validator.assertVisible(option1);
	validator.assertVisible(option2);
	validator.assertVisible(option3);
	validator.assertVisible(option4);
	validator.assertVisible(option5);
	validator.assertVisible(option6);
  }
}
module.exports =  ContactUsPage;