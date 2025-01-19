describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
        //to open in existing tab use these commands
       cy.get("#opentab").invoke('removeAttr','target').click();

       //if new url is showing then use origin keywor to execute 
       cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       }) 
 
    });
 
});