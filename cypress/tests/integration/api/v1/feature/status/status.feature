Feature: Status endpoint tests

  Scenario: GET to /api/v1/status should return 200
    Given I hit "GET" to endpoint "/api/v1/status"
    Then should return status code "200"
 