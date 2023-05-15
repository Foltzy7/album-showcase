describe("about page elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="about-nav"]').click();
  });

  it("displays about sections", () => {
    cy.get("#section-purpose").should("have.text", "Purpose");
  });
});
