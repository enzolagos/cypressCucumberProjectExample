import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { todoHome} from "../../pages/TodoLy/TodoHome"
import {todoLoginModal} from "../../pages/TodoLy/TodoLoginModal"
import {todoMain } from "../../pages/TodoLy/TodoMain"


//Scenario: Login successfull in todo.ly

When("User clicks in the login section", ()=>{
  todoHome.loginSectionClick()
})
When("User completes all the login fields with a registered account data", ()=>{
  todoLoginModal.loginCamposLlenado("valid");
})
When("User click in LOGIN button", ()=>{
  todoLoginModal.clickLoginButton();
})
Then("User must be logged in",()=>{
  todoMain.validateLogin();
})

//Scenario: Login unsuccessfull in todo.ly
When("User completes all the login fields with an unregistered account data", ()=>{
  todoLoginModal.loginCamposLlenado("invalid");
})
Then("User must not be logged in",()=>{
  todoHome.validateUnsuccessfulLogin()
})