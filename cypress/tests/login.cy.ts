import testLoginData from '../fixtures/login.json'

describe('Login with ordernumber and zip code', () => {
	it('1- Test all fields are required', () => {
		cy.visit(testLoginData.loginUrl)
		cy.findByText(testLoginData.loginTitle).should('exist')

		cy.get('[data-cy=submit]').click()

		cy.findByText(testLoginData.orderNumberRequiredError).should('exist')
		cy.findByText(testLoginData.zipCodeRequiredError).should('exist')
	})

	it('2- Fills wrong data and submit to see error', () => {
		cy.visit(testLoginData.loginUrl)

		cy.get('[data-cy=orderNumber]').type(testLoginData.wrongOrderNumber)
		cy.get('[data-cy=zipCode]').type(testLoginData.wrongZipCode)

		cy.intercept('GET', '/orders', req => {
			if (req.query.zip === testLoginData.wrongZipCode) {
				req.reply({
					status: 400,
					body: {
						status: 'fail',
						error: 'Order number or zip code is wrong.',
					},
				})
			}
		}).as('submitError')

		cy.get('[data-cy=submit]').click()
		cy.wait(5000)
		// cy.wait('@submitError')
		cy.findByText('Order number or zip code is wrong.').should('exist')
	})

	it('3- Fill Correct data and see redirect', () => {
		cy.visit(testLoginData.loginUrl)

		cy.get('[data-cy=orderNumber]').type(testLoginData.orderNumber)
		cy.get('[data-cy=zipCode]').type(testLoginData.zipCode)

		cy.get('[data-cy=submit]').click()

		cy.url().should('include', testLoginData.orderDetailsUrl)
		cy.wait(5000)
		cy.get('[data-cy=signout]').click()
		cy.wait(1000)
		cy.url().should('include', testLoginData.loginUrl)
	})
})
