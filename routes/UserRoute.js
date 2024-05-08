const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} = require("../controller/User.js");

router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', loginUser);

module.exports = router;
