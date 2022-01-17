Feature: Login

  Scenario: Test Login with valid credentials
    Given Open the browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enter email as "admin@yourstore.com" and password as "admin"
    And click on Login button
    Then Page title should be "Dashboard / nopCommerce administration"
    When User click on Logout button
    Then Page title should be "Your store. Login"
    Then close browser

  Scenario Outline: Login Data Driven
    Given Open the browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enter email as "<email>" and password as "<password>"
    And click on Login button
    Then Page title should be "Dashboard / nopCommerce administration"
    When User click on Logout button
    Then Page title should be "Your store. Login"
    Then close browser

    Examples: 
      | email                  | password |
      | admin@yourstore.com    | admin    |
      | admin123@yourstore.com | admin123 |
