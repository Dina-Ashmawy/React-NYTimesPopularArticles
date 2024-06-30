export {};

describe("Header Component", () => {
  it("renders the header with correct text", () => {
    cy.visit("/");
    cy.get("header").contains("NY Times Most Popular Articles");
  });
});
