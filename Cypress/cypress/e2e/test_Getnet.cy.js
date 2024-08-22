Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})

import home from '../Seletors/home.sel.cy'
import duvidas from '../Seletors/duvidas.sel.cy'
require('cypress-xpath')

describe('E2E Central de Ajuda - Getnet', () => {
  it('passes', () => {
    cy.visit('https://site.getnet.com.br/')
    cy.viewport(1000, 600)
    cy.get(home.search).click()
    cy.get(home.souCliente).click()
    cy.get(home.centralAjuda).click()
    cy.xpath(duvidas.searchInput).type('boleto')
    cy.get('[href="https://site.getnet.com.br/duvidas/solucao-de-dividas/?modal_open=692"] > .c-search-dropdown-link__item').click()
    cy.get('.is-modal-open > .o-modal__content > .o-modal__close').click() // fecha o modal pois existe um erro abrindo o modal de outra pergunta
    cy.get('.c-more-answers__content > [data-modal="692"]').click() // abre o modal correto
    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content').should('be.visible') // verifica se o modal correto esta aberto
    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content').contains('O boleto será enviado para seu endereço de e-mail registrado em Cadastro, ou aquele digitado no momento da negociação.')
  })
})