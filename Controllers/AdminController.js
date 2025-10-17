const User = require('./../Models/User');

class AdminController {

    async KYCStatsUpdater(req, res) {
        try {
            const { id } = req.params;
            const { KYCStatus } = req.body;

            const updatedUser = User.findByIdAndUpdate(
                id,
                { KYCStatus, updatedAt: new Date() },
                { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json({
                    message: `Internal server error : ${error}`
                });
            }
            res.status(200).json({
                message: "KYC Status Updated",
                user: {
                    id: updatedUser._id,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    email: updatedUser.email,
                    KYCStatus: updatedUser.KYCStatus
                }
            });


        } catch (error) {
            console.log(`[KYCStatsUpdater] => errors : ${error}`);
            return res.status(500).json({
                message: `Internal server error : ${error}`
            });
        }
    }
}

module.exports = new AdminController();