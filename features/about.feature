Feature: Pages

  Scenario Outline: Pages Load
    When I navigate to the "<page>" 
    Then the page title should be "<title>"

  Examples:
  | page      | title    |
  | /         |          |
  | /projects | Projects |
