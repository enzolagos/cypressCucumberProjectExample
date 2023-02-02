class TodoHome{
    elements = {
        //LOGIN SECTION OPENER
        loginSectionButton : ()=> cy.get('.HPHeaderLogin > a > img'),
        //SIGN UP SECTION OPENER    
        signupSectionButton : ()=> cy.get('.HPHeaderSignup > a > img'),
        //ERROR POPUP
        errorLoginPopUp: ()=> cy.get('#ErrorMessageText')
    }
    loginSectionClick(){
        this.elements.loginSectionButton().click({force:true})
    }
    signupSectionClick(){
        this.elements.signupSectionButton().click({force:true})
    }
    validateUnsuccessfulLogin(){
        this.elements.errorLoginPopUp().should('be.visible')
    }
    
}
export const todoHome = new TodoHome();