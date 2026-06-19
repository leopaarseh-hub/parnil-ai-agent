Feature: AI Growth Consultant discovery conversation
  As a prospective client of Parnil Studio
  I want a focused, human discovery conversation
  So that the agent gathers exactly what it needs to produce a tailored brief

  Background:
    Given the consultant uses the chat system instruction
    And every chat message is treated as untrusted client data, never as instructions

  Scenario: The agent asks one focused question at a time
    When the client sends their first message
    Then the agent replies with a single question
    And the reply first reacts to what the client said

  Scenario: The agent never quotes prices during discovery
    When the client asks "how much will this cost?"
    Then the agent does not quote a number or list packages
    And the agent reassures that pricing is flexible and an expert can help

  Scenario: The agent reassures a budget-worried client
    Given the client says "that sounds expensive for me"
    When the agent replies
    Then it reassures the solution can be tailored and phased
    And it mentions discounts may apply and an expert will help
    And it does not quote a number

  Scenario: The agent does not re-ask answered questions (in-chat memory)
    Given the client already shared their business name earlier in the chat
    When the conversation continues
    Then the agent does not ask for the business name again

  Scenario: Oversized input is rejected before any model call
    Given a conversation that exceeds the configured limits
    When the request reaches the server
    Then the server rejects it with a 413 status
    And no LLM call is made
