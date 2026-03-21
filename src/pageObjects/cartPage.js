class CartPage {
    // Locatori
    get cartItems() { return $$('[data-test="inventory-item"]'); }
    get checkoutButton() { return $('button[data-test="checkout"]'); }

    async isItemInCart(productName) {
        const items = await this.cartItems;

        for (const item of items) {
            const name = await item.$('[data-test="inventory-item-name"]').getText();

            if (name === productName) {
                return true;
            }
        }
        return false;
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();