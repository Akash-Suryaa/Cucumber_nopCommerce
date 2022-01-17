$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/customerPage.feature");
formatter.feature({
  "name": "Customer Information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding customer information",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_enter_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_can_view_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_clicks_on_customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on customer menuItem",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_clicks_on_customer_menuItem()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KFCGKBL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\Akash\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51818}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ecdb8ace0219a64e24f47e4da778e49\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat PageObjects.CustomerPage.ClickOnCustomerMenuItem(CustomerPage.java:59)\r\n\tat StepDefinitions.LoginSteps.user_clicks_on_customer_menuItem(LoginSteps.java:90)\r\n\tat ✽.User clicks on customer menuItem(file:///C:/Users/Akash/eclipse-workspace/Cucumber_nopCommerce/./Features/customerPage.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on AddNewBtn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_clicks_on_AddNewBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can view add new Customer Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_can_view_add_new_Customer_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_enter_customer_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_can_view_confirmation_message(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});