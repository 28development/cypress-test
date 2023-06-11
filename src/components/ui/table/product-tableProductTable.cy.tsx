import React from 'react'
import { ProductTable } from './product-table'

describe('<ProductTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductTable />)
  })
})