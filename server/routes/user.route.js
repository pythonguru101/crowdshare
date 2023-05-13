// user routes  

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/signup', userController.signUpUser);

// router.post('/login', userController.loginUser);

router.delete('/:id', userController.deleteUser);

router.patch('/:id', userController.updateUser);

module.exports = router;
