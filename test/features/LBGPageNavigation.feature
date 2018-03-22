Feature: Navigation to different pages from LBG homepage

Background: 
Given I am on LBG homepage

Scenario: Navigate to personal banking logon page
When I navigate to "Personal banking logon" page
Then I should be on "Personal banking logon" page

Scenario: Navigate to business banking logon page
When I navigate to "Business banking logon" page
Then I should be on "Business banking logon" page

Scenario: Navigate to Contact Us page
When I navigate to "Contact Us" page
Then I should be on "Contact Us" page
