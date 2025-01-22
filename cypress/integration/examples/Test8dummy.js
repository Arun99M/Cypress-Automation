// describe('End to End ecommerce Test', function () {

//     before(function () {
//         //runs once before all tests in this block with before hook
//         cy.fixture('example').then(function (data) {
//             this.data = data
//             this.homepage = new HomePage()
//         })


//     })

//     it('submit order', function () {

//         const productName = this.data.productName
        
//         this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/')
//         //this is using to define local to global 
        
//         const ProductPage = this.homepage.login(this.data.username,this.data.password)

//         ProductPage.pageValidation()
//         ProductPage.verifyCardLimit()
//         ProductPage.selectProduct(productName) 
//         ProductPage.selectFirstProduct()
//            //directly finding the product
        
//         let sum = 0
//         //.each is it iterates every time, each time it will pick each element, $el is first element is retrived
//         cy.get('tr td:nth-child(4) strong')
//             .each($el => {

//                 //this default command used locally to execute without error. this will no applicable for other elements

//                 Cypress.config('defaultCommandTimeout', 10000)
//                 //₹. 65000, before number there is a space so follow below steps, also converetd in number format
//                 const amount = Number($el.text().split(" ")[1].trim())
//                 sum = sum + amount //65000 + 130000

//                 // then we want to use the sum value outside then resolve the promise 

//             }).then(function () {
//                 expect(sum).to.be.lessThan(200000)
//             })
//         cy.contains('button', 'Checkout').click()
//         cy.get("#country").type("India")

//         //part child traverse
//         cy.wait(1000)
//         cy.get('.suggestions ul li a').click()
//         cy.get('.btn-success').click()

//         //Assertion 
//         cy.get('.alert-success').should('contain', 'Success')


//     })
// })


