import { buildUser } from "../support/generate";

describe("registeration", () => {
  it("should register a new user", () => {
    const user = buildUser();
    cy.visit("/")
      .findByText(/SIGN IN/i)
      .click()
      .get(".sign-up-form > :nth-child(1) > .form-input")
      .type(user.name)
      .get(".sign-up-form > :nth-child(2) > .form-input")
      .type(user.email)
      .get(":nth-child(3) > .form-input")
      .type(user.password)
      .get(":nth-child(4) > .form-input")
      .type(user.password)
      .findByText("SIGN UP")
      .click()
      .findByText("SIGN OUT")
      .should("have.text", "SIGN OUT");
  });
});
