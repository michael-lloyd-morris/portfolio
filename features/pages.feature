Feature: Pages

  Scenario Outline: Pages Load
    When I navigate to the "<page>" 
    Then the page title should be "Michael Lloyd Morris' Portfolio Site"

  Examples:
  | page                 |
  | /                    |
  | /projects            |
  | /projects/drupal     |
  | /projects/cucumber   |
  | /demos               |
  | /demos/ag-grid       |
  | /demos/css-ems       |
  | /demos/cucumber-next |
  | /experience          |
