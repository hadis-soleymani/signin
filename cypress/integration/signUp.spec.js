describe("sign up success", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3000");
  });

  it("Fill in the inputs and sign up successfuly", () => {
    cy.get('input[name="name"]').type(userID_Allpha(6));
    cy.get('input[name="email"]').type(userID_Allpha(6) + "@gmail.com");
    cy.get('input[name="password"]').type('vghuyt');
    cy.get('input[name="confirmPassword"]').type('vghuyt');
    cy.get('[type="checkbox"]').check()
    cy.get("form").submit();
    cy.wait(2000);
  });
});

//this function can create random words
function userID_Allpha(character_count) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < character_count; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
