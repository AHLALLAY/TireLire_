const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Group Name is Required"],
        maxLength: [50, "Maximum length is 50 Characters"],
        trim: true,
    },
    members: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }],
    contributionAmount: {
        type: Number,
        required: [true, "Contribution amount is required"],
        min: [100, "Minimum 100 dh"],
        max: [10000, "Maximum 10000 dh"],
    },
    status: {
        type: String,
        enum: ['actif', 'terminé', 'suspendu'],
        default: 'actif'
    },
    currentRound: {
        type: Number,
        default: 1
    },
    totalRounds: {
        type: Number,
        required: true
    },
    creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model('Group', groupSchema);