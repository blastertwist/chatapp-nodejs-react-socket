const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userProfileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: String, require: true,
    },
    lastName: {
        type: String, require: true
    }
})

module.exports = mongoose.model('Profile', userProfileSchema)