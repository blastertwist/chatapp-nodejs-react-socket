const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String, require: true
    },
    password: {
        type: String, require: true
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('User', userSchema)