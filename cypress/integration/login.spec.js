describe("login test", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3000/login");
  });

  it("Fill in the inputs and login successfuly", () => {
    cy.get('input[name="email"]').type(userID_Allpha() + "@gmail.com");
    cy.get('input[name="password"]').type(userID_Allpha());
    cy.get("form").submit();
  });

  function userID_Allpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
});
