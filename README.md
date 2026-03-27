# WebdriverIO Test Automation

## Task Description
This project demonstrates end-to-end (E2E) test automation using WebdriverIO for the website saucedemo.com. The goal is to validate checkout amd login user flows and ensure application stability through automated testing across multiple browsers.

## Scope:
### UC-1 Checkout Flow
- Login with standard_user
- Add "Sauce Labs Fleece Jacket" to cart
- Validate item is in cart
- Proceed to Checkout
- Fill in Information form
- Complete the purchase and validate the success message

### UC-2 Data Driven Login
Multiple login scenarios are tested using a data-driven approach:
- Valid user login (expected success)
- Locked user login (expected failure with specific error message)
- Empty credentials (validation error)
- Invalid password (authentication error)

## Cross-browsing testing
- Google Chrome
- Microsoft Edge

## Technologies Used
- WebdriverIO
- JavaScript (ES6)
- Mocha Framework
- Allure Reporter
- Page Object Model (POM)

## Installation
npm install

## Run Tests
npx wdio run wdio.conf.js

## Generate Allure Report
npx allure generate allure-results --clean
npx allure open
