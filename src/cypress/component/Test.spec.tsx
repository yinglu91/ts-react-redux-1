import React from 'react';
import { mount } from '@cypress/react';
import Test from '../../components/Test';

describe('Test FC', () => {
  it('renders learning react text', () => {
    // we’re only testing the functionality that is built into the component
    
    // mount tells Cypress that we want it to render our React Component on its own
    // rather than in the context of a whole application
    mount(<Test />)
    
    // use standard Cypress commands
    cy.contains('Learning React').should('be.visible');
  });
});

// https://medium.com/swlh/cypress-unit-testing-react-components-with-typescript-77b38e5043b3
// cypress-react-unit-test has been renamed to @cypress/react
// https://github.com/cypress-io/cypress/tree/master/npm/react

// https://github.com/bahmutov/test-redux-examples