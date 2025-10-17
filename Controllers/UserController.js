const User = require('./../Models/User');

class UserController {

    async displayUsers(req, res) {
        try {
            const users = await User.find({});
            return res.status(200).json({
                success: true,
                data: users
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: `Internal Server Error: ${error}`
            });
        }
    }

    async displayUsersById(req, res) {
        try {
            const user = await User.findById(req.params.id );
            if (!user) {
                console.log('[displayUsersById] user not found');
                return res.status(404).json({
                    success: false,
                    message: 'User Not Found'
                });
            }
            return res.status(200).json({
                success: true,
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: `Internal Server Error: ${error}`
            });
        }
    }
}

module.exports = new UserController();