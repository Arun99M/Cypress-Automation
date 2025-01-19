import ConfirmationPage from './ConfirmationPage'
class CartPage {
    checkoutItems(){
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()

    }
    sumOfProducts() {
        let sum = 0
        return cy.get('tr td:nth-child(4) strong')
            .each($el => {
                //this default command used locally to execute without error. this will no applicable for other elements
                Cypress.config('defaultCommandTimeout', 10000)
                //₹. 65000, before number there is a space so follow below steps, also converetd in number format
                const amount = Number($el.text().split(" ")[1].trim())
                sum = sum + amount //65000 + 130000
                // then we want to use the sum value outside then resolve the promise 
            }).then(function () {
                return sum
            })
    }
}
//this class will not be visible outside public
export default CartPage;