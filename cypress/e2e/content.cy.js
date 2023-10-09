/// <reference types="cypress" />

describe("Content presense and correctness of information", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Title is correct", () => {
    cy.title().should("eql", "Sex Lives Report 2023");
  });

  it("Should have only H1 tag with correct value", () => {
    cy.get("h1").should("have.length", 1);
    cy.get('[data-cy="main-heading"]').should("have.text", "sexlivesreport");
  });

  it("Should have footer that contains all contact details (email, phone, address) and social media links", () => {
    // should have company logo
    cy.get("[data-cy='lsa-logo']").should("exist");

    // should have All rights reserved text
    cy.get("[data-cy='footer']").contains("All rights reserved", {
      matchCase: false,
    });

    // should have labels (email, phone, find us)
    cy.get("[data-cy='footer']").contains("email", { matchCase: false });
    cy.get("[data-cy='footer']").contains("phone", { matchCase: false });
    cy.get("[data-cy='footer']").contains("find us", { matchCase: false });

    // should have correct information
    cy.get("[data-cy='footer']").contains("info@letsstopaids.org", {
      matchCase: false,
    });
    cy.get("[data-cy='footer']").contains("+1 (416) 231-2333", {
      matchCase: false,
    });
    cy.get("[data-cy='footer']").contains(
      "LetsStopAIDS HQ - 160 John St, Suite 200, Toronto, ON M5V 2E5",
      { matchCase: false }
    );
    cy.get("[data-cy='footer']").contains(
      "LetsStopAIDS Guyana - Lot 8 Back Street, Better Hope, East Coast Demerara, Guyana",
      { matchCase: false }
    );

    // should have social media icons with correct links
    cy.get("[data-cy='sm-link']").should("have.length", 6);

    cy.get("[data-cy-sm-type='facebook']")
      .invoke("attr", "href")
      .should("eq", "https://www.facebook.com/LetsStopAIDS/");

    cy.get("[data-cy-sm-type='instagram']")
      .invoke("attr", "href")
      .should("eq", "https://www.instagram.com/letsstopaids/");

    cy.get("[data-cy-sm-type='twitter']")
      .invoke("attr", "href")
      .should("eq", "https://twitter.com/LetsStopAIDS/");

    cy.get("[data-cy-sm-type='linkedin']")
      .invoke("attr", "href")
      .should("eq", "https://www.linkedin.com/company/letsstopaids/");

    cy.get("[data-cy-sm-type='tiktok']")
      .invoke("attr", "href")
      .should("eq", "https://www.tiktok.com/@letsstopaids/");

    cy.get("[data-cy-sm-type='youtube']")
      .invoke("attr", "href")
      .should("eq", "https://www.youtube.com/channel/UCTkxmYJZ-IgIosZhlguNtFg");
  });
});
