describe('Demo QA', function () {
    it('TC-01', function () {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include', 'demoqa.com');
        cy.get('#firstName').type('Jenar').should('have.value', 'Jenar');
        cy.get('#lastName').type('JenarLagi').should('have.value', 'JenarLagi');
        cy.get('#userEmail').type('jenar@email.com').should('have.value', 'jenar@email.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('080989999').should('have.value', '080989999');
        // cy.get('#dateOfBirthInput' , {force : true}).click().type('{selectall}' , '{backspace}').type('13 Jan 2000').type('{enter}');
        cy.get('#dateOfBirthInput').invoke('val','13 Jan 2000');
        cy.get('#dateOfBirthInput').should('have.value', '13 Jan 2000');
        cy.get('.subjects-auto-complete__value-container',{force:true}).type('daftar').should('have.value', '');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
        cy.get('#uploadPicture').attachFile('testgambar.jpg');
        cy.get('#currentAddress').type('Ngaglik, Yogyakarta').should('have.value', 'Ngaglik, Yogyakarta');
        // cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').should('not.be.disabled');
        // cy.get('#stateCity-wrapper > :nth-child(2)').should('not.be.disabled');
        // cy.get('#stateCity-wrapper > :nth-child(3)').should('not.be.disabled');
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click();
        cy.get('#react-select-3-option-2').click();
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('#react-select-4-option-0').click();
        cy.get('#submit').click();
        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', 'Haryana Karnal')
    })
})