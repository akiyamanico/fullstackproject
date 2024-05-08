const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const getUsersById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            nomorhp: req.body.nomorhp,
            tanggalLahir: req.body.tanggalLahir,
            kelamin: req.body.kelamin,
            alamat: req.body.alamat,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        const newUser = await user.save();
        res.json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser);
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Autentikasi Gagal!' });
        }
        return res.json({ token: jwt.sign({ username: user.username, name: user.name }, '99278a840e80dda0f457efcad3041c88fc1742730805aaaa6860c0ba6206cc4d', {expiresIn : '24h'}) });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { loginUser, getUsers, getUsersById, createUser, updateUser, deleteUser };
