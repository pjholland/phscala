$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("first_test.feature");
formatter.feature({
  "id": "my-first-test",
  "description": "\nAs a tester,\nI would like to utilize cucumber,\nSo that I can create BDD style selenium-webdriver tests.",
  "name": "My First test",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "my-first-test;google-search,-using-selenium",
  "tags": [
    {
      "name": "@wip",
      "line": 7
    }
  ],
  "description": "",
  "name": "Google search, using selenium",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I have navigated to google",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I search for \"selenium\"",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "the page title should be selenium - Google Search",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "first_test_step_def.scala:15"
});
formatter.result({
  "duration": 2276136000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 14
    }
  ],
  "location": "first_test_step_def.scala:19"
});
formatter.result({
  "duration": 320034000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});