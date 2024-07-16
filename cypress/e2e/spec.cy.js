describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    // cy.get('[data-testid="form"]').should("exist");

    // cy.get("input#email").should("be.visible").should("have.attr", "placeholder", "email").type("admin@store.com").should("have.value", "admin@store.com");

    // cy.get("input#password").should("be.visible").should("have.attr", "placeholder", "password").type("123456").should("have.value", "123456");
    // cy.get('[data-testid="submit"]').click();

    // cy.get("div.home").should("be.visible");
    // cy.get("div.sidebar").should("be.visible");

    // cy.get('[data-testid="users"]').click();

    // cy.url().should("include", "/users");


    //UAS
    cy.get('[data-testid="form"]').should("exist");

    cy.get('input#email').should('be.visible')
      .should('have.attr', 'placeholder', 'email')
      .type('admin@store.com').should('have.value', 'admin@store.com');

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'password')
      .type('123456').should('have.value', '123456');

    cy.get('[data-testid="submit"]').click();

    cy.get('div.sidebar')
      .should('be.visible');

    cy.get('[data-testid="categories"]').click();
    
    cy.url().should('include', '/categories')

    cy.get('a.link').contains('Add New').click();

    cy.get('input#displayName').should('be.visible')
    .should('have.attr', 'placeholder', 'Categories')
    .type('Dessert').should('have.value', 'Dessert');

    cy.get('button').contains('Send').click();
    
    cy.contains('tr', 'Dessert').within(() => {
      cy.get('span.deleteButton').click();
    });

    // cy.get('[data-testid="form"]').should("exist");
    // cy.get('[data-testid="addnew"]').click();



    // cy.get("div.mydatatable").should("be.visible");



    
  });
});
  