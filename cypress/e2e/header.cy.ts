export {};

describe("Header Component", () => {
  it("renders the header with correct text", () => {
    // Visit the page where your Header component is rendered
    cy.visit("/");

    // Verify that the header text is present
    cy.get("header").contains("NY Times Most Popular Articles");
  });
});
