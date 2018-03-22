Feature: Google search

Scenario: Google search
Given I am on Google homepage
When I search for text "Halifax"
And I navigate to the Halifax homepage
Then I should be on the Halifax homepage