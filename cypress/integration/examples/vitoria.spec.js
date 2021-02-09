/// <reference types="cypress" />

context('Vitória', () => {
  it('home',() => {
    cy.visit('http://localhost:4200/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('verifcar título', () => {
    cy.get('span').should('have.text', 'Aprendendo Inglês')
  })

  it('Preencher frase', () => {
    cy.get('.form-control').type('Eu gosto de aprender')
  })

  it('Clicar no Botão', () => {
    cy.get('.btn').click()
  })

  it('Preencher frase 2', () => {
    cy.get('.form-control').type('Eu assisto tv')
    cy.get('.btn').click()
  })

  it('Preencher frase 3', () => {
    cy.get('.form-control').type('Como vai você?')
    cy.get('.btn').click()
  })

  it('Preencher frase 4', () => {
    cy.get('.form-control').type('Eu como pão')
    cy.get('.btn').click()
  })

  it('Verifica frase ganhador', () => {
    cy.get('h3').should('have.text', 'Você ganhou! ')
  })
})
