class CartPage {
    // Locators
    get cartItems() { return $$('[data-test="inventory-item"]'); }
    get checkoutButton() { return $('button[data-test="checkout"]'); }

    async isItemInCart(productName) {
        const items = await this.cartItems;

        for (const item of items) {
            const name = await item.$('[data-test="inventory-item-name"]').getText();

            if (name === productName) {
                console.log*('Item found in cart: ${productName}');
                return true;
            }
        }
        console.log('Item not found in cart: ${productName}');
        return false;
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
        console.log('Go to Checkout!')
    }
}

module.exports = new CartPage();