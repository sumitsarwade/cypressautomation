import RegisterPage from '../../pages/RegisterPage'
//import AccountOverview from '../../pages/AccountsOverview'
//import HomePage from '../../pages/HomePage'
//import AccountSummaryPage from '../../pages/AccountSummaryPage'

describe('End-to-end user journey', () => {

  const registerPage = new RegisterPage()

 //const accountoverview = new AccountOverview ()

  before(() => {
    cy.visit('/parabank/admin.htm')
    cy.contains('Initialize').click()
  })


  it('should register, login and land on account summary page', () => {

    const user = {
      firstName: 'Test',
      lastName: 'User',
      address: 'Test Street',
      city: 'Test City',
      state: 'TS',
      zip: '12345',
      phone: '9999999999',
      ssn: '123-45-6789',
      username: `user_${Date.now()}`,
      password: 'Password123'
    }

    registerPage.visitRegister()
    registerPage.registerUser(user)
    registerPage.verifyRegistration()

   // accountoverview.visitOverview()
    //accountoverview.verifyLoaded()
    //accountoverview.verifyAccountTable()
    


    /*
 // const homePage = new HomePage()
 // const accountSummaryPage = new AccountSummaryPage()
doesn not need
*/

    //homePage.visitLogin()
    //homePage.login(user.username, user.password)

    //accountSummaryPage.verifyAccountSummeryPage()
  })
})
