import ProductPage from './ProductPage';

//create a class called Homepage
class HomePage
{
    goTo(url)
    {
    cy.visit(url);
    }   
//create a method called login, uername and password parameterized(two arguments passed)same aruguments passed on below locators
      login(username,password)
    { 
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        //there is no button tag name is defined because in tha page only on have sign IN text
        cy.contains('Sign In').click()
        return new ProductPage()
    }

}
export default HomePage;
