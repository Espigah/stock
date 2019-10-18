'use strict';
const LoginPage = require('login.page.p.js');

describe('Listagem de pokémons', () => {
  const loginPage = new LoginPage();
  it('Deve pesquisar um pokémon de acordo com o texto pesquisado', () => {
    loginPage.visit();
    loginPage.filtro.sendKeys('mew');
    expect(loginPage.resultados.count()).toEqual(2);
  });
});
