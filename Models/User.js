const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxLength: [50, 'Maximum length is 50 characters'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        maxLength: [50, 'Maximum length is 50 characters'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        maxLength: [50, 'Maximum length is 50 characters'],
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email format is invalid'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Minimum length is 6 characters'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^(\+2126|\+2127|06|07)[0-9]{8}$/, 'Phone number format is invalid'],
        unique: true,
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['admin', 'user', 'group_creator'],
        default: 'user',
    },
    nationalId: {
        type: String,
        required: [true, 'National ID is required'],
        unique: true,
    },
    KYCStatus: {
        type: String,
        required: [true, 'KYC status is required'],
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    nationalIdImage: {
        type: String,
        required: [true, 'National card image is required'],
    },
    selfieImage: {
        type: String,
        required: [true, 'Selfie image is required'],
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model('User', userSchema);