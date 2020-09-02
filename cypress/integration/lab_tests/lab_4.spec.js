describe('Lab 4', () => {
  it('Successfully loads with valid HTML', () => {
    cy.fixture('test_values').then((json) => {
      const labUrl = `${json.test_context || ''}/lab_4/`;
      cy.visit(labUrl); // change URL to match your dev URL
      cy.htmlvalidate();
    });
  });

  it('Should include an HTML form', () => {
    cy.get('form');
  });

  it('Should include a Textarea field that has 5 rows and 33 columns', () => {
    cy.get('form textarea')
      .then(($ta) => {
        const rows = Number($ta.attr('rows'));
        const cols = Number($ta.attr('cols'));

        expect(rows).to.be.greaterThan(4);
        expect(cols).to.be.greaterThan(32);
      });
  });

  it('Should have an input field for text, with an attached label element', () => {
    cy.get('form input[type=text]')
      .then(($txt) => {
        const name = $txt.attr('id');
        cy.get('form label')
          .then(($lbl) => {
            const fr = $lbl.attr('for');
            expect(fr).equals(name);
          });
      });
  });

  it('Should use the submit button to POST material to the /api endpoint', () => {
    cy.get('form').should('have.attr', 'method', 'post');
    cy.get('button[type=submit]')
      .click();
    // TODO: MAKE SURE THIS CHECKS A NEW PAGE
    // TODO: ASSIGNMENT 1 SPEC
    cy.contains('hello world', { matchCase: false });
  });

  it('Should receive an HTML element containing "Hello World" from the server', () => {
    cy.fixture('test_values').then((json) => {
      const labUrl = `${json.test_context || ''}/lab_4/`;
      cy.visit(labUrl); // change URL to match your dev URL
      cy.get('button[type=submit]')
        .click();
      cy.contains('hello world', { matchCase: false });
    });
  });

  it('Should link to the lab CSS file and be styled appropriately', () => {
    cy.get('body')
  });
});