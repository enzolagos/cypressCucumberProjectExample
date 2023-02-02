class TodoMain{
    elements = {
        logoutButton :()=> cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout'),
        currentProjectLabel : ()=> cy.get('#CurrentProjectTitle')
    }
    validateLogin(){
        this.elements.logoutButton().should('be.visible')
    }
    validateNewUser(){
        this.elements.currentProjectLabel().should('be.visible')
    }
}
export const todoMain = new TodoMain()