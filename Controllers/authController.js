const {validationResult} = require('express-validator');
const User = require('../Models/User');
const bcrypt = require('bcrypt');

class authController{

    async register(req, res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() });
            }

            const {firstName, lastName, email, password, phone, nationalId, nationalIdImage, selfieImage} = req.body;

            const user = await User.findOne({email});
            if(user){
                return res.status(400).json({message: 'this email already existe'});
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

            return res.status(201).json({message: 'user created with success',});

        }catch(error){
            console.log(`[register] => errors : ${error}`);
            if(error.code === 11000){
                return res.status(400).json({
                    message: 'Email, phone, national Id already existe',
                });
            }
            return res.status(500).json({message: `Unexpected error : ${error}`});
        }
    }

    login(email, password){

    }

}

module.exports = authController;