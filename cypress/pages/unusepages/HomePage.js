class HomePage {
    visitLogin(){
        cy.visit("/parabank/index.htm")

    }
    enterUsername(username){
        cy.get(".input[name ='username']").type(username)
        }
    enterPassword(password){
        cy.get(".input[name = 'password']").type(password)
    }
    clickLogIn(){
        cy.get(':nth-child(5) > .button').click()
    }

    login(username, password){
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogIn()
    }

}

export default HomePage