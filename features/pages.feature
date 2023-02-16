Feature: Pages

  Scenario Outline: Pages Load
    When I navigate to the "<page>" 
    Then the page title should be "<title>"

  Examples:
  | page                 | title                                   |
  | /                    |                                         |
  | /projects            | Projects                                |
  | /projects/drupal     | Projects - Runtime Assertions in Drupal |
  | /projects/cucumber   | Projects - Cucumber                     |
  | /demos               | Demos                                   |
  | /demos/ag-grid       | Demos - AgGrid                          |
  | /demos/css-ems       | Demos - CSS Responsiveness with EMS     |
  | /demos/cucumber-next | Demos - Cucumber Testing in NextJS      |
  | /experience          | Experience                              |
