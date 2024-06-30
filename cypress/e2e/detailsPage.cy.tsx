import { mockArticles } from "../../public/mock/test.mock";

describe("DetailsPage", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/viewed/*", {
      statusCode: 200,
      body: {
        status: "OK",
        copyright:
          "Copyright (c) 2024 The New York Times Company. All Rights Reserved.",
        num_results: mockArticles.length,
        results: mockArticles,
      },
    }).as("getArticles");

    cy.visit("/");

    cy.wait("@getArticles").its("response.statusCode").should("eq", 200);
  });

  it("navigates to the details page and displays article details", () => {
    cy.get("[data-cy=article-link]").first().should("be.visible").click();
    cy.get("[data-cy=article-details]").should("be.visible");
    cy.contains(mockArticles[0].title).should("exist");
    cy.contains(mockArticles[0].byline).should("exist");
    cy.contains(mockArticles[0].published_date).should("exist");
    cy.contains(mockArticles[0].abstract).should("exist");
    cy.contains(`Source: ${mockArticles[0].source}`).should("exist");
    cy.contains(`Section: ${mockArticles[0].section}`).should("exist");

    if (mockArticles[0].adx_keywords) {
      cy.contains(`Keywords: ${mockArticles[0].adx_keywords}`).should("exist");
    }

    cy.get("a[target='_blank']").should("exist");
  });
});
