class InventoryPage {
    // Locators
    get inventoryItems() { return $$('[data-test="inventory-item"]'); }
    get cartIcon() { return $('[data-test="shopping-cart-link"]'); } 

    async addProductToCart(productName) {
    const items = await $$('[data-test="inventory-item"]');
    
    for (const item of items) {
        const name = await item.$('[data-test="inventory-item-name"]').getText();
        
        if (name === productName) {
            await item.$('button').click();
            break;
        }
    }
}

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = new InventoryPage();