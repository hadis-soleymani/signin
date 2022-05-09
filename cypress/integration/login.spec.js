//email and password are valid
describe("login success", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3000/login");
  });

  it("Fill in the inputs and login successfuly", () => {
    cy.get('input[name="email"]').type(userID_Allpha(6) + "@gmail.com");
    cy.get('input[name="password"]').type(userID_Allpha(6));
    cy.get("form").submit();
    cy.wait(2000);
  });
});

//email is empty
describe("email is empty", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3000/login");
  });
  it("email is empty", () => {
    cy.get('input[name="email"]').type("a");
    cy.get('input[name="password"]').type(userID_Allpha(6));
    cy.get("form").submit();
    cy.wait(2000);
  });
});

//email is not valid
describe("email is not valid", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3000/login");
  });
  it("email is not validate", () => {
    cy.get('input[name="email"]').type(userID_Allpha(6) + "com");
    cy.get('input[name="password"]').type(userID_Allpha(6));
    cy.get("form").submit();
    cy.wait(2000);
  });
});

//password is not valid
describe("password is not validate", () => {
  it("visit the login page", function () {
    cy.visit("http://localhost:3000/login");
  });
  it("password is not validate", () => {
    cy.get('input[name="email"]').type(userID_Allpha(6) + "@gmail.com");
    cy.get('input[name="password"]').type(userID_Allpha(5));
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
