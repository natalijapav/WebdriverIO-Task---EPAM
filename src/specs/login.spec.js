const loginPage = require('../pageObjects/loginPage');

const users = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        shouldPass: true,
        errorMessage: null
    },
    {
        username: 'testtest',
        password: 'testtest',
        shouldPass: false,
        errorMessage: 'Epic sadface: Username and password do not match any user in this service'
    }
];

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