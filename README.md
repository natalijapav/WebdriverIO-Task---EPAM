# WebdriverIO Test Automation Project

## Overview
This project demonstrates end-to-end (E2E) test automation using **WebdriverIO** for the website https://www.saucedemo.com/.

The goal is to validate key user flows such as login and checkout, and ensure application stability through automated cross-browser testing.

---

## Test Scope

### UC-1: Checkout Flow
- Login with `standard_user`
- Add product **"Sauce Labs Fleece Jacket"** to the cart
- Validate that the item is present in the cart
- Proceed to checkout
- Fill in the checkout information form
- Complete the purchase
- Validate the success message:  
  **"Thank you for your order!"**

---

### UC-2: Data-Driven Login
Multiple login scenarios are tested using a data-driven approach:

- Valid user login (expected success)
- Locked user login (expected failure with specific error message)
- Empty credentials (validation error)
- Invalid password (authentication error)

---

## Cross-Browser Testing
Tests are executed in parallel on:

- Google Chrome
- Microsoft Edge

---

## Technologies Used

- WebdriverIO
- JavaScript (ES6)
- Mocha Framework
- Allure Reporter
- Page Object Model (POM)

---

## Installation
npm install

## Run Tests
npx wdio run wdio.conf.js

## Generate Allure Report
npx allure generate allure-results --clean
npx allure open

