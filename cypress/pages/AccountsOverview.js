class AccountOverview{
    visitOverview(){
        cy.visit("https://parabank.parasoft.com/parabank/overview.htm")
    }
    verifyLoaded(){
        cy.url().should('include','/parabank/overview.htm')
        .contains('Accounts Overview').should('be.visible')
    }
    verifyAccountTable(){
        cy.get('accountTable').should('be.visible')
    }
}
export default AccountOverview