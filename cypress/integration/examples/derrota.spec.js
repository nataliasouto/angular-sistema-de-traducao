/// <reference types="cypress" />

context('Derrota', () => {
  it('home',() => {
    cy.visit('http://localhost:4200/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('verifcar título', () => {
    cy.get('span').should('have.text', 'Aprendendo Inglês')
  })

  it('Preencher frase', () => {
    cy.get('.form-control').type('não sei')
  })

  it('Clicar no Botão', () => {
    cy.get('.btn').click()
  })

  it('Preencher frase 2', () => {
    cy.get('.form-control').clear().type('desista')
    cy.get('.btn').click()
  })

  it('Preencher frase 3', () => {
    cy.get('.form-control').clear().type('vc nunca vai aprender inglês')
    cy.get('.btn').click()
  })

  it('Preencher frase 4', () => {
    cy.get('.form-control').clear().type('eu não consigo')
    cy.get('.btn').click()
  })

  it('Verifica frase perdedor', () => {
    cy.get('h3').should('have.text', ' Fim de Jogo. Você Perdeu! ')
  })
})
