describe("login test", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3003/login");
  });

  it("Fill in the inputs and login successfuly", () => {
    cy.get('input[name="email"]').type("hadis@gmail.com");
    cy.get('input[name="password"]').type("123456");
    cy.get("form").submit();
  });
});
