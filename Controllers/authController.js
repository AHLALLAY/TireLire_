const { validationResult } = require('express-validator');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthController {

    async register(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { firstName, lastName, email, password, phone, nationalId, nationalIdImage, selfieImage } = req.body;

            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: '[message] Email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phone,
                nationalId,
                nationalIdImage,
                selfieImage
            });

            await newUser.save();

            return res.status(201).json({ message: '[Message] User created successfully', });

        } catch (error) {
            console.log(`[register] => error : ${error}`);
            if (error.code === 11000) {
                return res.status(400).json({
                    message: '[MongooDb] Duplicate field value entered',
                });
            }
            return res.status(500).json({ message: `[server] Internal server error : ${error}` });
        }
    }

    async login(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                res.status(404).json({ message: '[Message] User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(401).json({ message: '[Message] Invalid credentials' });
            }

            const token = jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                    role: user.role,
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h', }
            );
            return res.status(200).json({
                message: '[message] Login successful',
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                    KYCStatus: user.KYCStatus,
                }
            });
        } catch (error) {
            console.log(`[login] => errors : ${error}`);
            return res.status(500).json({
                message: `[server] Internal server error : ${error}`
            });
        }
    }

}

module.exports = new AuthController();