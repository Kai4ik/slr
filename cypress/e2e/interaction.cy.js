/// <reference types="cypress" />

describe("User interaction", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const testEmail = "test_ml_from_cypress@gmail.com";

  it("User should be able to view entire text on forward section by clicking Read More button", () => {
    cy.get("[data-cy='forward-text']").should("have.class", "max-h-0");
    cy.get("[data-cy='read-more-btn']").click();
    cy.get("[data-cy='forward-text']").should("have.class", "!max-h-[300vh]");
    cy.get("[data-cy='read-more-btn']").click();
    cy.get("[data-cy='forward-text']").should("have.class", "max-h-0");
  });

  it("User should be able to hover tabs and view more details - Desktop", () => {
    cy.viewport("macbook-16");
    cy.get("[data-cy='mia-section']").scrollIntoView();
    cy.get("[data-cy='mia-hover-title']").should("not.include.text");
    cy.get("[data-cy='hover-tab']")
      .first()
      .should("include.text", "Gender")
      .realHover()
      .then(() => {
        cy.get("[data-cy='mia-hover-title']")
          .invoke("text")
          .should("have.length.gt", 0);
      });
  });

  it("User should be able to expand accordion tab and view more details - Mobile", () => {
    cy.viewport("iphone-6");
    cy.get("[data-cy='mia-section']").scrollIntoView();

    cy.get("[data-cy='expand-tab']")
      .first()
      .find("[data-cy='expand-details']")
      .should("not.be.visible");

    cy.get("[data-cy='expand-tab']")
      .first()
      .realClick()
      .then(() => {
        cy.get("[data-cy='expand-tab']")
          .first()
          .find("[data-cy='expand-details']")
          .should("be.visible");
      });
  });

  it("MailChimp Testing - user should be able to subscribe to the newsletter, if already subscribed - should be notified, if suspicious email - should be notified", async () => {
    const archieveData = JSON.stringify({
      email_address: testEmail,
    });

    // before testing subscribe logic, archives user with the testing email
    cy.request({
      method: "POST",
      url: Cypress.env("mc_archieve_fn_url"),
      body: archieveData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      cy.get("[data-cy='mc-response-message']").should("not.exist");
      cy.get("[data-cy='mc-email']").type(testEmail);
      cy.get("[data-cy='mc-submit-btn']").realClick();
      cy.get("[data-cy='mc-response-message']").should("be.visible");
      cy.get("[data-cy='mc-response-message']")
        .invoke("text")
        .should(
          "eq",
          "Yay! You have successfully subscribed to our mailing list!"
        );

      cy.get("[data-cy='mc-email']").clear().type("test@gmail.com");
      cy.get("[data-cy='mc-submit-btn']").realClick();
      cy.get("[data-cy='mc-response-message']")
        .invoke("text")
        .should(
          "eq",
          "test@gmail.com looks fake or invalid, please enter a real email address."
        );
    });
  });
});
