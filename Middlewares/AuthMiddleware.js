const { body } = require("express-validator");
const User = require("../Models/User");

class AuthMiddleware {
    validateLogin() {
        return [
            body('email')
                .isEmail()
                .normalizeEmail()
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
                .withMessage('Email Format Wrong'),
            body('password')
                .isLength({ min: 6 })
                .withMessage('6 Characters at least'),
        ];
    }

    validateRegister() {
        return [
            body('firstName')
                .isLength({ min: 3, max: 50 })
                .trim()
                .withMessage('Characters between 3 and 50'),
            body('lastName')
                .isLength({ min: 3, max: 50 })
                .trim()
                .withMessage('Characters between 3 and 50'),
            body('email')
                .isEmail()
                .normalizeEmail()
                .trim()
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
                .withMessage('Email Format Wrong')
                .custom(async (email) => {
                    const isExist = await User.findOne({ email });
                    if (isExist) {
                        throw new Error('Already Exists');
                    }
                    return true;
                }),
            body('password')
                .isLength({ min: 6 })
                .withMessage('6 Characters at least')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
                .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
            body('phone')
                .matches(/^(\+2126|\+2127|06|07)[0-9]{8}$/)
                .withMessage('Phone number format is invalid (Moroccan format required)')
                .custom(async (phone) => {
                    const isExist = await User.findOne({ phone });
                    if (isExist) {
                        throw new Error('Phone number already exists');
                    }
                    return true;
                }),
            body('nationalId')
                .isLength({ min: 5, max: 8 })
                .withMessage('National ID must be between 5 and 8 characters')
                .custom(async (nationalId) => {
                    const isExist = await User.findOne({ nationalId });
                    if (isExist) {
                        throw new Error('National ID already exists');
                    }
                    return true;
                }),
            body('nationalIdImage')
                .notEmpty()
                .withMessage('National ID image is required'),
            body('selfieImage')
                .notEmpty()
                .withMessage('Selfie image is required'),
            body('role')
                .optional()
                .isIn(['admin', 'user', 'group_creator'])
                .withMessage('Role must be admin, user, or group_creator')
        ];
    }
}

module.exports = new AuthMiddleware();