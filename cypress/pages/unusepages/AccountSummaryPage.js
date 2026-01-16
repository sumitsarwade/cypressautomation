class AccountSummaryPage{
    verifyAccountSummeryPage(){
        cy.url().should('include','parabank/overview.htm')
        cy.contains("Accounts Overview").should('be.visible')
    }
}

export default AccountSummaryPage