describe("about page elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays album 1 by default", () => {
    cy.contains("ID: 1");
  });

  it("displays new album that is entered", () => {
    cy.contains("ID: 1");
    cy.get("#selectedAlbumInput").clear().type("5");
    cy.contains("ID: 201");
  });
});
