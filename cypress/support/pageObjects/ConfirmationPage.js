class ConfirmationPage{
    submitFormDetails(){

        //if we have requirement that some piece of code is used multiple pages instead of rewriting in evey page object file, we can create one custom commands point all your page object file code to that one single source of truth
       // cy.submitFormDetails()
        cy.get("#country").type("India")
        cy.wait(1000)
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success').click()
    }
    getAlertMessage()
    {
        return cy.get('.alert-success')
    }
}
export default ConfirmationPage;