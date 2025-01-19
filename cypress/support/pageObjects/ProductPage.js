import CartPage from './CartPage'
//create class ProductPage
class ProductPage {

    //create method names
    pageValidation() {
        cy.contains('Shop Name').should('be.visible')
    }
    getCardCount() {
       return cy.get('app-card')
    }
    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click()

    }
    goToCart()
    {
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }
    selectProduct(productName) {
        //filter is used out of 4 we can filter required product to return  .then($element) is used to return the particular locator
        //filter will yield a promise, yielded value we converted into a cypress standards by using wrap, so it becomes cy.get locator and then we applied all the action
        //by passing the product name filtering
        cy.get('app-card').filter(`:contains("${productName}")`).then($element => {
            //wrap is used to yield the element passed into
            cy.wrap($element).should('have.length', 1)
            //button tag is written because there will be multiple add button in same page
            cy.wrap($element).contains('button', 'Add').click()
        })

    }

}
export default ProductPage;