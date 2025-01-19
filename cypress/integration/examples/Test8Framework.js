import HomePage from '../../support/pageObjects/HomePage';

describe('End to End ecommerce Test', function () {
    before(function () {
        //runs once before all tests in this block with before hook
        cy.fixture('example').then((data) =>
         {
            this.data = data
            this.homepage = new HomePage()
        })
    })
    it('submit order', function () {            
        const productName = this.data.productName
        // Using Cypress.env() to access the URL from the configuration file
        this.homepage.goTo(Cypress.env('url') + "/loginpagePractise/")
         //this is using to define local to global 
        cy.log(this.data.username)
        //which return type is productpage object
        const productPage = this.homepage.login(this.data.username, this.data.password)        
        productPage.pageValidation()
        //cy.pause()     it is used to pause the validate then resume
        //Assertion and testdata should go from our actual test, only pageobjects and their relevant method actions should come from page object files
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
         //which return type is cartpage object
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then((sum) =>
        {
            //Assertions
            expect(sum).to.be.lessThan(200000);
        })
         //which return type is confirmationpage object
        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain', 'Success')

        
      
    })
})
