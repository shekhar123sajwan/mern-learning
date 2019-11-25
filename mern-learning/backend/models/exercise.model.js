const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        timestamps: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: false
    }
}, {
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;