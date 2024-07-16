describe("Store End-to-End Testing", () => {
      beforeEach(() => {
        cy.visit("http://localhost:5173/");
        cy.get('[data-testid="form"]').should("exist");
        cy.get("input#email").type("admin@store.com");
        cy.get("input#password").type("123456");
        cy.get('[data-testid="submit"]').click();
      });
    
      it("passes", () => {
        cy.get("div.home").should("be.visible");
        cy.get("div.sidebar").should("be.visible");
    
        // Test for Categories menu
        cy.get('[data-testid="categories"]').click();
        cy.url().should("include", "/categories");
    
        // Check if widgets are visible
        cy.get('[data-testid="widget-users"]').should("be.visible");
        cy.get('[data-testid="widget-products"]').should("be.visible");
        cy.get('[data-testid="widget-categories"]').should("be.visible");
    
        // Click Add New and check form input
        cy.get('[data-testid="add-new"]').click();
        cy.get("input#name").should("be.visible").should("have.attr", "placeholder", "Coffee").type("Dessert").should("have.value", "Dessert");
    
        // Submit the form
        cy.get('[data-testid="submit"]').click();
        cy.url().should("include", "/categories");
    
        // Check the table for new entry
        cy.get('table').contains('tr', 'Dessert').should('be.visible');
    
        // Test for delete button (assuming there is a delete button in the row)
        cy.get('table').contains('tr', 'Dessert').within(() => {
          cy.get('[data-testid="delete"]').click();
        });
    
        // Confirm deletion (assuming a confirmation dialog)
        cy.get('[data-testid="confirm-delete"]').click();
    
        // Check the table no longer contains the entry
        cy.get('table').contains('tr', 'Dessert').should('not.exist');
      });
    });
  