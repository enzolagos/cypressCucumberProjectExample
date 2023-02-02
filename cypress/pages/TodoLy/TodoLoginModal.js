class TodoLoginModal{
    elements = {
        emailTextBox : ()=> cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
        pswTextbox : ()=> cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
        loginButton : ()=> cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin'),
    }
    //LOGIN
    

    loginCamposLlenado(vaildOrInvalid){
        //this.elements.emailTextBox().click({force:true});
        this.elements.emailTextBox().type(Cypress.env(vaildOrInvalid+"Login")["email"]);
        //this.elements.pswTextbox().click({force:true});
        this.elements.pswTextbox().type(Cypress.env(vaildOrInvalid+"Login")["password"]);
    }

    clickLoginButton(){
        this.elements.loginButton().click({force:true})
    }
}
export const todoLoginModal = new TodoLoginModal();