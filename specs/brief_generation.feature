Feature: Strategic Business Brief generation
  As a client who finished the discovery conversation
  I want an accurate, tailored brief with correct pricing
  So that I can decide and contact Parnil Studio

  Scenario: Compile is gated until contact details are collected
    Given a conversation with fewer than 3 messages
    Then the "Compile Strategic Brief" action is disabled in the UI

  Scenario: The brief is returned as valid structured JSON
    When a brief is generated
    Then the response parses as JSON
    And it contains businessName, summary, sitemap, and nextSteps

  Scenario: Pricing math is computed in code, not by the LLM
    Given the model selects the "momentum" package with add-ons "seo_setup" and "online_shop"
    When the server computes the quote
    Then the one-time total equals 1428 + 149 + 499 = 2076 EUR
    And the investment card is appended to the summary by the server

  Scenario: Recurring add-ons are billed monthly and shown separately
    Given the selected add-ons include "monthly_reporting"
    When the server computes the quote
    Then "monthly_reporting" contributes 49 EUR to the monthly total
    And it does not change the one-time total

  Scenario: Unknown add-on keys are ignored safely
    Given the model returns an add-on key that is not in the catalog
    When the server computes the quote
    Then the unknown key is ignored and no error is thrown

  Scenario: An invalid package selection falls back without breaking
    Given the model does not return a valid package key
    When the brief is finalized
    Then the brief is still returned using the model's summary
    And no investment card math is fabricated
