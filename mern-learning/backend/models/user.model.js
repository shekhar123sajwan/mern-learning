const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        timestamps: true
    }
}, {
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;