class TodoRegisterModal{
    elements = {
        fullNameTextbox : ()=> cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName'),
        emailTextbox : ()=> cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail'),
        passwordTextbox :()=> cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword'),
        termsCheckbox : ()=> cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms'),
        signupButton : ()=> cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup')
    }
    //REGISTER
    
    registerCamposLlenado(){
        this.elements.fullNameTextbox().type('Enzo Testing');
        this.elements.emailTextbox().type(Math.round(Math.random()*100000)+"@email.com");
        this.elements.passwordTextbox().type('probando123');
        this.elements.termsCheckbox().click({force: true});
        
    }
    signUpClick(){
        this.elements.signupButton().click({force: true});
    }
}
export const todoRegisterModal = new TodoRegisterModal();