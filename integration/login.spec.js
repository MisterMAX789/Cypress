describe("When user is on login page, user", () => {
  //проверка отображения страницы
  it("Should open the main page", () => {
    cy.visit("localhost:3000");
    cy.contains("Books list");
  });

  //валидная проверка авторизации
  it("Should be able to login with correct email and password", () => {
    cy.visit("localhost:3000");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать");
  });

  //проверка авторизации с неверным логином
  it("Should not be able to login with empty email", () => {
    cy.visit("localhost:3000");
    cy.login(" ", "test");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  //проверяем добавление книги
  it("Should add book", () => {
    cy.visit("localhost:3000");
    cy.login("test@test.com", "test");
    cy.contains("Add new").click();
    cy.contains("Book description");
    cy.get("#title").type("Ясно, понятно");
    cy.get("#description").type("Как правильно писать тексты.");
    cy.get("#authors").type("Максим Ильяхов");
    cy.contains("Submit").click();
    cy.contains("Ясно, понятно");
  });

  //проверяем добавление книги в избранное
  it("Should add book is favorit ", () => {
    cy.visit("localhost:3000");
    cy.login("test@test.com", "test");
    cy.button("a.mt-3", "Ясно, понятно", "Add to favorite");
    cy.contains("Favorites").click();
    cy.contains("Ясно, понятно");
  });

  //проверяем удаление книги из избранного
  it("Should add book is favorit ", () => {
    cy.visit("localhost:3000");
    cy.login("test@test.com", "test");
    cy.contains("Favorites").click();
    cy.button("a.mt-3", "Ясно, понятно", "Delete from favorite");
    cy.contains("Books list").click();
    cy.button("a.mt-3", "Ясно, понятно", "Add to favorite");
  });
});
