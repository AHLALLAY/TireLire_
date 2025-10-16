const User = require('./../Models/User');

class UserController {

    async displayUsers(req, res) {
        try{
            const users = await User.find({});
            return res.status(200).json({
                success: true,
                data: users
            });

        }catch(error){
            return res.status(500).json({
                success: false,
                message: `Internal Server Error: ${error}`
            });
        }
    }

    displayUsersById(id) {

    }
}

module.exports = new UserController();