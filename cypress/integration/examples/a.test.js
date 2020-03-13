/// <reference types="cypress" />

describe("open app", () => {
  const user = cy;
  it("should open app", () => {
    user.visit("/");
  });
  it("should check if the new user is not signed in and cart is empty", () => {
    user.get('[href="/signin"]').should("have.text", "SIGN IN");
    user.get(".item-count").should("have.text", "0");
  });
  it("click on jackests to check the router goes to jackests", () => {
    user.findByText(/^JACKETS/).click();
    user
      .url()
      .should("have.string", "https://kingclothing.netlify.com/shop/jackets");
  });
});
