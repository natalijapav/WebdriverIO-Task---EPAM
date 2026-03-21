class CheckoutPage {
    // Locators
    get firstNameInput() { return $('[data-test="firstName"]'); }
    get lastNameInput() { return $('[data-test="lastName"]'); }
    get zipCodeInput() { return $('[data-test="postalCode"]'); }
    get continueButton() { return $('[data-test="continue"]'); }
    get finishButton() { return $('[data-test="finish"]'); }
    get successMessage() { return $('[data-test="complete-header"]'); }

    // Methods
    async fillForm(firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.setValue(zipCode);
        await this.continueButton.click();
    }

    async completeCheckout() {
        await this.finishButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.getText();
    }
}

module.exports = new CheckoutPage();