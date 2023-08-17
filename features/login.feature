@auth
Feature: Login

@passing @JIRA-1
Scenario: Basic Login Success
  Given I am not logged in
  When I provide valid login credentials
  Then I should be logged in

@passing @JIRA-1
Scenario: Bad Credentials
  Given I am not logged in
  When I provide invalid login credentials
  Then I should see a login failure message

@passing @JIRA-1
Scenario: Login Strikeout
  Given I am not logged in
  When I provide invalid login credentials five times
  Then I should see a login strikeout message
  And my account should be locked

@JIRA-1
Scenario: Login attempt on locked account
  Given My account is locked
  When I provide valid login credentials
  Then I should see an account locked message

@JIRA-2
Scenario: Two Factor authentication required after 8 hours
  Given I am not logged in
  And I have not logged in for 8 hours
  When I provide valid login credentials
  Then I should receive a multifactor authentication challenge

@JIRA-2
Scenario: Two Factor authentication success
  Given I have received a multifactor authentication challenge
  When I provide a valid challenge code
  Then I should be logged in

@JIRA-2
Scenario: Two Factor authentication failure
  Given I have received a multifactor authentication challenge
  When I provide an invalid challenge code
  Then I should see an authentication failure message

@JIRA-2
Scenario: Two Factor Strikeout
  Given I have received a multifactor authentication challenge
  When I provide an invalid challenge code five times
  Then I should see an authentication lock out message
  And my account should be locked

@JIRA-3
Scenario: Two factor setup
  Given I am not logged in
  And I have not set up multifactor authentication
  When I provide valid login credentials
  Then I should be prompted to set up multifactor authentication
