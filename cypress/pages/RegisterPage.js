class RegisterPage{
    visitRegister(){
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    }

    registerUser(user){
    cy.get("input[name='customer.firstName']").type(user.firstName)
    cy.get("input[name='customer.lastName']").type(user.lastName)
    cy.get("input[name='customer.address.street']").type(user.address)
    cy.get("input[name='customer.address.city']").type(user.city)
    cy.get("input[name='customer.address.state']").type(user.state)
    cy.get("input[name='customer.address.zipCode']").type(user.zip)
    cy.get("input[name='customer.phoneNumber']").type(user.phone)
    cy.get("input[name='customer.ssn']").type(user.ssn)
    cy.get("input[name='customer.username']").type(user.username)
    cy.get("input[name='customer.password']").type(user.password)
    cy.get("input[name='repeatedPassword']").type(user.password)

    cy.get("input[value='Register']").click()

    }

    verifyRegistration(){
        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')
    }
}

export default RegisterPage
