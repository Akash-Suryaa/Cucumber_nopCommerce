$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test Login with valid credentials",
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
  "status": "skipped"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_enter_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Logout button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_click_on_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.page_title_should_be(java.lang.String)"
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