![logo](./src/assets/logo.jpg)
# **Peachtree Bank**

## Table of Contents

1. [Description](#description)
2. [Goal](#goal)
3. [Requirements](#requirments)
4. [Setup](#setup)
5. [Conclusion](#conclusion)

## Description

Peachtree Bank is a front-end Backbase assessment that replicates the development of an online, retail-banking platform.

The purpose of the assessment is to demonstrate one front-end development acumen and knowledge of front-end frameworks and practices.

## Goal

Build a sing-page application according to a provided design with the functionality of transferring money and displaying past transactions in an ordered list.

### Requirements
-  The "FROM ACCOUNT" field is pre-filled with the data shown in the UI Design and is DISABLED
- When transfer is pressed the new transfer should appear at the top of the transactions list
- The balance in the "FROM ACCOUNT" field should have decreased by the amount of the transfer
-  The form should reset to its initial state after the transfer has been completed successfully

The user should be able to:
- Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form
- Press "Submit" and preview the entered data
- Press "Transfer" on the preview screen
- A User shouldn't be able to transfer money beyond a balance of $ -500.00
- View recent transactions in an ordered list
- Search recent transactions by typing a keyword in the search field
- Sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

## Setup

1. Clone repo
  - Clone with HTTPS: https://github.com/rbur14/Peachtree-Bank.git
  - Clone with SSH: git@github.com:rbur14/Peachtree-Bank.git
2. Run `npm i` in `peachtree-bank` to install node modules
3. Run `ng serve` in `peachtree pank` to view project in browser
4. Navigate to: http://localhost:4200/

## Conclusion

This exercise gave me the opportunity to implement new techniques. A few of the major decisions I made were:

- **Implementing a custom pipe:** Developing a custom pipe gave me the ability to easily filter the recent transactions array without much code and proved to be more efficient than other filtering methods.

- **Sorting array function:** This function in the transactions component gave me the ability to take in a 'Date', 'Amount', or 'Beneficiary' property and sort the recent transactions array based on these parameters. I chose to do this in order to avoid repeating functions and maintain DRY code.

- **Style variables file:** I chose to separate the main style variables into a separated .scss file in order keep the code flexible. Thus, changes to the style variables could be implemented at once throughout the app.
