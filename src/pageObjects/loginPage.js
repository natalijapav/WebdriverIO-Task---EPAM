class LoginPage {
    // Locators
    get usernameInput() { return $('input[data-test="username"]'); }
    get passwordInput() { return $('input[data-test="password"]'); }
    get loginButton() { return $('input[data-test="login-button"]'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    // Methods
    async open() {
        await browser.url('/');
        console.log('Browser opened!');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        console.log('Successfully logged in!')
    }
}

module.exports = new LoginPage();