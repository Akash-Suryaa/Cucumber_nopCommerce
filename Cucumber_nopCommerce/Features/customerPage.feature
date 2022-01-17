
Feature: Customer Information


Scenario: Adding customer information
    Given Open the browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enter email as "admin@yourstore.com" and password as "admin"
    And click on Login button
    Then User can view dashboard
    When User clicks on customer menu
    And User clicks on customer menuItem
    And User clicks on AddNewBtn
    Then  User can view add new Customer Page
    When User enter customer info
    And user clicks on save button
    Then user can view confirmation message "The new customer has been added successfully."
    Then close browser
    
    