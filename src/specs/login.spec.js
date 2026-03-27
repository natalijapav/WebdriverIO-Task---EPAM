const loginPage = require('../pageObjects/loginPage');
const { users } = require('../testData/userData');

describe('UC-2 Data Driven Login', () => {
    for (const user of users) {
        it(`should login with ${user.username}`, async () => {
            await loginPage.open();
            await loginPage.login(user.username, user.password);

            if (user.shouldPass) {
                // Login successful
                const url = await browser.getUrl();
                expect(url).toContain('/inventory');
            } else {
                // Error message login
                const error = await loginPage.errorMessage.getText();
                expect(error).toBe(user.errorMessage);
            }
        });
    }
});