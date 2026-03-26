class InventoryPage {
    // Locators
    get inventoryItems() { return $$('[data-test="inventory-item"]'); }
    get cartIcon() { return $('[data-test="shopping-cart-link"]'); } 

    async addProductToCart(productName) {
    const items = await this.inventoryItems;
    
    for (const item of items) {
        const name = await item.$('[data-test="inventory-item-name"]').getText();
        
        if (name === productName) {
            await item.$('button').click();
            console.log('Added to cart!')
            break;
        }
    }
    
}

    async goToCart() {
        await this.cartIcon.click();
        console.log('Navigated to cart!');
    }
}

module.exports = new InventoryPage();