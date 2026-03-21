class LoginPage {
    // Locators
    get usernameInput() { return $('input[data-test="username"]'); }
    get passwordInput() { return $('input[data-test="password"]'); }
    get loginButton() { return $('input[data-test="login-button"]'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    // Methods
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();