# Overview

In this small nodejs project you will find an automated test that can be used 
to verify the acceptance criteria of the given web service.

- Service API
  - https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false
- Acceptance Criteria to verify
  - Name = "Carbon credits"
  - CanRelist = true
  - The Promotions element with Name = "Gallery" has Description containing text "Good position in category"

Using nodeJs as the environment and Jest as a semi-lightweight testing framework, the bulk of criteria validation is mostly available (no need to roll-you-own matchers for validation).  The Fetch API is used
to simplify the HTTP requests needed. 



# Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/) (or your preferred IDE)
2. [NodeJS](https://nodejs.org/en/)
3. [Jest Framework](https://jestjs.io/)



# Setup

1. Download the project from the git repo.
2. From a system shell (cmd shell for Win), navigate to the project directory
3. From within the project root (./TEST_ENGINEER) run the following using CLI:
     ```
     /> npm install
     ```
     this will install all of the necessary nodejs dependencies listed
     within the package.json
4. After dependencies have been successfully installed execute the tests using CLI:
    ```
    /> npm test
    ```
5. Test should run! :)

# Notes:

- There are currently 7 tests that make up this project
- Output for the test should give a clear description of scenario under test
- Any failures with be highlighted in RED along with a description of expected and actual results.
