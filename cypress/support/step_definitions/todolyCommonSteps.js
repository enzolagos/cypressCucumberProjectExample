import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("User is in todo.ly page", () => {
    cy.visit("https://todo.ly/");});