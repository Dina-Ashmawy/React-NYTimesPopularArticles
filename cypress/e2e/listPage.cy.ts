import { mockArticles } from "../../public/mock/test.mock";

describe("ListPage E2E Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/viewed/*", {
      statusCode: 200,
      body: {
        status: "OK",
        copyright:
          "Copyright (c) 2024 The New York Times Company. All Rights Reserved.",
        num_results: 20,
        results: mockArticles,
      },
    }).as("getMostViewed");

    cy.visit("/");
  });

  it("loads articles on successful API response", () => {
    cy.contains("Loading...").should("exist");

    cy.wait("@getMostViewed");

    cy.contains("Loading...").should("not.exist");

    cy.get("#list-page-root").should("exist");

    cy.contains("Test Article 1").should("exist");
  });

  it("handles API error gracefully", () => {
    cy.intercept("GET", "**/viewed/*", {
      statusCode: 500,
      body: { error: "Internal Server Error" },
    }).as("getMostViewedError");

    cy.visit("/");

    cy.contains("There is Error in fetching data").should("exist");
  });
});
