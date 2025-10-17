const { body } = require("express-validator");

class AuthMiddleware{
    validateLogin(){
        return [
            body('email').isEmail().normalizeEmail().withMessage('Email Format Wrong'),
            body('password').isLength({min:6}).withMessage('Password Should Be 6 Characters'),
        ];
    }
}

module.exports = new AuthMiddleware();