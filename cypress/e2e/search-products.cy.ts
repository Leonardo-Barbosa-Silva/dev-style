describe('should be able primarily to search products and add it on shop cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to search products and add it on the shop cart', () => {
    cy.get('input[name="search"]').type('moletom').parent('form').submit()

    cy.location('pathname').should('include', 'search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('label', 'GG').click()
    cy.get('input[value="GG"]').should('be.checked')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not be able to visit the search page without a search query', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
