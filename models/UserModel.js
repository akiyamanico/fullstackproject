const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nomorhp: {
        type: String,
        required: true,
        unique: true
    },
    tanggalLahir: {
        type: String,
        required: true
    },
    kelamin: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};
  
const User = mongoose.model('User', userSchema);
module.exports = User;
