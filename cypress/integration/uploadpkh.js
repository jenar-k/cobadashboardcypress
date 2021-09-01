describe('Admin PKH', function () {
    it('TC-01 Admin PKH Coba Upload', function () {
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox.id');
        cy.get('#input-password').type('admin');
        cy.get('#btn-login').click();
        // cy.get('#dataTable_filter > label > .form-control').type('jenar');
        cy.get('.d-flex > .btn').click();
        //cy.get('#drop-zone').attachFile('testgambar.jpg');
        cy.get('input[type="file"]').attachFile('testgambar.jpg');
    })
})