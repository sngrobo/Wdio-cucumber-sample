class Utils{

	launchURL(url){
         browser.url(url);
         return this.waitForReadyState();
	}

	clickElement(locator){
		browser.waitForExist(locator, 5000);
		browser.click(locator);
		 return this.waitForReadyState();
	}

	waitForReadyState(){
		return browser.waitUntil(function () {
    		return 'complete' ===  browser.execute(function () {
      		return document.readyState;
    	}).value;
  }, 100000);
	}
}
module.exports = Utils;