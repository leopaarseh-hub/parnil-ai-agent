Feature: Lead capture to Supabase
  As the Parnil Studio owner
  I want every generated brief to capture the lead
  So that I can follow up with prospective clients

  Scenario: A lead is saved when contact details exist
    Given a generated brief with a client name or email
    When the brief is finalized
    Then a row is inserted into the Supabase "leads" table
    And the insert includes business, goal, budget_range and recommended_pages

  Scenario: Lead capture never breaks the brief
    Given Supabase is unreachable or not configured
    When a brief is generated
    Then the client still receives their brief
    And the failure is logged, not raised

  Scenario: Leads are write-only for the public key
    Given the publishable/anon key
    When it attempts to SELECT from "leads"
    Then no rows are returned because there is no SELECT policy

  Scenario: No secrets are committed to source
    Given the repository source code
    Then it contains no Supabase service-role or API keys
    And credentials are read from environment variables only
