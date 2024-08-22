# Teste Getnet x CWI

Interview for CWI Company for client Getnet

# Questionaire

There is a prova_api_QA_JS (Paulo Moral).pdf file with the answers

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.16.0` and `9.2.0` of Node.js and npm, respectively. I suggest you use the same or later versions.

# Postman tests

Install latest version of Postman;
Download Collection and Enviroment files from Github;
Import both to Postman application;
Open a terminal at same folder and install Newman and Reporter

## Installation

Run `npm install -g newman`
Run `npm install -g newman-reporter-htmlextra`

## Tests

Run `newman run "Testes Getnet.postman_collection.json" -e "Getnet.postman_environment.json" -r htmlextra --reporter-htmlextra`
______________________________________________________________________________________________________________________________

## Frontend tests

Download or access the branch on Github to open file Cypress/cypress/e2e/test_Getnet.cy.js

## Installation

Run `npm install cypress`
Run `npm install cypress-xpath`

## Tests

Run `npx cypress open` > E2E Testing > Start E2E Testing in Chrome

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [pmoral86](https://github.com/pmoral86).