const loginPage = require('../pageObjects/loginPage');
const inventoryPage = require('../pageObjects/inventoryPage');
const cartPage = require('../pageObjects/cartPage');
const checkoutPage = require('../pageObjects/checkoutPage');
const { billingInfo } = require('../testData/userData');

const product_name = 'Sauce Labs Fleece Jacket';

describe('UC-1 Checkout Flow', () => {
    it('should complete checkout successfully', async () => {
        // Login
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        // Adding product
        await inventoryPage.addProductToCart(product_name);

        // Cart Validation
        await inventoryPage.goToCart();
        const isInCart = await cartPage.isItemInCart(product_name);
        expect(isInCart).toBe(true);

        // Checkout
        await cartPage.proceedToCheckout();

        //Fill the form
        await checkoutPage.fillForm(billingInfo.firstName, billingInfo.lastName, billingInfo.zipCode)

        // Finish/Validate message
        await checkoutPage.completeCheckout();
        const message = await checkoutPage.getSuccessMessage();
        expect(message).toBe('Thank you for your order!');
    });
});