# WebdriverIO Test Automation

## Task Description
E2E test automation for www.saucedemo.com

### UC-1 Checkout Flow
- Login with standard_user
- Add "Sauce Labs Fleece Jacket" to cart
- Validate item is in cart
- Proceed to Checkout
- Fill in Information form
- Validate success message

### UC-2 Data Driven Login
- standard_user (Should pass)
- locked_out_user (Fail with specific error message) 
- empty fields (Fail with error message)
- password wrong (Fail with error message)

## Prerequisites
- Google Chrome
- Microsoft Edge

## Installation
npm install

## Run Tests
npx wdio run wdio.conf.js

## Generate Allure Report
npx allure generate allure-results --clean
npx allure open
