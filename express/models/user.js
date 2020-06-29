const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String, default: 'data:image/png;base64,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'}
});

const User = mongoose.model('User', userSchema);

module.exports = User;