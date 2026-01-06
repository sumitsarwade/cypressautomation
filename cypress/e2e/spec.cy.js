describe('login suite' , () =>{
    it('login automation', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.get('.oxd-label')
        cy.get("input[placeholder='Username']").type("Admin")
        .get("input[placeholder='Password']").type("admin123")
        .get(("button[type='submit']"))
        .click()
        })
})