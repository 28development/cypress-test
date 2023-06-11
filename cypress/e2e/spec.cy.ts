/// <reference types="cypress" />

describe('spec.cy.ts', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have correct title', () => {
    cy.title().should('eq', 'Sales Tax')
  })

  it('should see the table and the calculation button', () => {
    cy.get('[data-cy="product-table"]').should('exist')
    cy.get('[data-cy="calculate-all-button"]').should('exist')
  })

  it('should check if table has 5 columns', () => {
    cy.get('[data-cy="product-table"] tr:first-child th').should('have.length', 5)
  })

  it('should check if table has 10 rows', () => {
    cy.get('[data-cy="product-table"] tr').should('have.length', 10)
  })

  it('should check if the last column has no value in each row', () => {
    cy.get('[data-cy="product-table"] tr').each(($row) => {
      const lastColumnText = $row.find('td').eq(4).text()
      expect(lastColumnText).to.be.empty
    })
  })

  it('should be able to calculate the "calculated price" column', () => {
    cy.get('[data-cy="calculate-all-button"]').click()
    cy.get('[data-cy="product-table"] tr:not(:first-child)').each(($row) => {
      const lastColumnText = $row.find('td').eq(4).text()
      expect(lastColumnText).not.to.be.empty
    })

    // check if the calculation is correct, using the given static data
    const result = [12.49, 16.49, 0.85, 10.5, 54.65, 32.19, 20.89, 9.75, 11.85]

    cy.get('[data-cy="product-table"]').each(($row, index) => {
      const lastColumnText = $row.find('td').eq(4).text()
      const expectedValue = result[index]
      cy.log(`Row ${index + 1}: Expected Value: ${expectedValue}, Actual Value: ${lastColumnText}`)
      expect(Number(lastColumnText)).to.eq(expectedValue)
    })

    // Should be able to reset the calculation on reset button click
    cy.get('[data-cy="reset-button"]').click()
    cy.get('[data-cy="product-table"] tr:not(:first-child)').each(($row) => {
      const lastColumnText = $row.find('td').eq(4).text()
      expect(lastColumnText).to.be.empty
    })
  })
})

export { }
