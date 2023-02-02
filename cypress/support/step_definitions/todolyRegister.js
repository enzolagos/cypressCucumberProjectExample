import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { todoHome} from "../../pages/TodoLy/TodoHome"
import {todoRegisterModal} from "../../pages/TodoLy/TodoRegisterModal"
import {todoMain } from "../../pages/TodoLy/TodoMain"


//Scenario: Register successfull in todo.ly

When("User clicks in the register section", ()=>{
  todoHome.signupSectionClick();
})
When("User completes all the register fields with valid data", ()=>{
  todoRegisterModal.registerCamposLlenado();
})
When("User clicks in REGISTER button", ()=>{
  todoRegisterModal.signUpClick();
})
Then("User must be registered and logged in",()=>{
  todoMain.validateNewUser();
})