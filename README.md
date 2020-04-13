# Example of a framework for E2E testing with JavaScript + TestCafe
Project created following the course: https://www.udemy.com/course/automated-testing-with-testcafe/

Read about TestCafe here: 
[TestCafe docs](https://devexpress.github.io/testcafe/)

## Getting Started

### Prerequisites

- Install Node.js
- If you are using VS Code install [TestCafe Test Runner](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner)

### Installing

1. Clone the project: 
```
git clone https://github.com/olesiaMartushkanova/testcafe-automation-course
```

2. Install node_modules:
```
npm i
```

### Run Tests

There are several ways to run the tests:

1. Using TestCafe Test Runner in VS Code

2. npm commands (see package.json)

Run in Chrome: 
```
test:chrome
```
Run in Chrome headless: 
```
test:chrome: headless
```
Run in mobile view: 
```
test:chrome:mobile
```
Run in Safari: 
```
test:safari
```
Run in Firefox: 
```
test:firefox
```
Run in Edge: 
```
test:edge
```