const users = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        shouldPass: true,
        errorMessage: null
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        shouldPass: false,
        errorMessage: 'Epic sadface: Sorry, this user has been locked out.'
    },
    {
        username: '',
        password: '',
        shouldPass: false,
        errorMessage: 'Epic sadface: Username is required'
    },
    {
        username: 'standard_user',
        password: 'wrong_password',
        shouldPass: false,
        errorMessage: 'Epic sadface: Username and password do not match any user in this service'
    }
];

const billingInfo = {
    firstName: 'Natalija',
    lastName: 'Pavlovic',
    zipCode: '12345'
};

module.exports = { users, billingInfo };
