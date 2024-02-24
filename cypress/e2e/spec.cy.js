
  describe('Cognizant Website Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        
          return false
     });
    beforeEach(() => {
        cy.visit('https://www.cognizant.com/')
        cy.get('button[id="onetrust-accept-btn-handler"]').click() 
    })
   
  
    it('should display the homepage title', () => {
      // Assert that the homepage title is displayed correctly
      cy.title().should('include', 'Intuition engineered');
      
    });
  
    it('should navigate to Careers page', () => {
      // Click on the Careers link in the navigation menu
      cy.contains('Careers').click();
      // Assert that the URL changes to the Careers page
      cy.url().should('include', 'careers');
    });
  
    it('should search for "technology" in the search bar', () => {
      
      cy.get(':nth-child(9) > .nav-item').click();
      cy.get('#gsc-i-id1').type('automation');
      cy.get('#gsc-i-id1').should('have.value', 'automation');
      // Press Enter key to perform the search
      cy.get('.gsc-search-button > svg').click();
     
      // Assert that the search results should be visible
      cy.get('.cog-search-content').should('be.visible');


    });
  
    it('should navigate to the Contact Us page', () => {
      // TODO

    });
  });