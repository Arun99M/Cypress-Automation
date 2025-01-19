/// <reference types="cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//using JQuery to find the visible element
cy.get("div.mouse-hover-content").invoke("show")

//force :true is used to find the invisble element 
//cy.contains("Top").click({force: true})
cy.url().should('include','top')

})
})