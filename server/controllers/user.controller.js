// user controller 

const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');




// get all users
exports.getUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
}

// get user by id
exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
}

// sign up user with password bycrypt and jwt 

exports.signUpUser = (req, res) => {
    const { name, email, password } = req.body;

    // simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });

    }

    // check for existing user


    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({
                name,
                email,
                password
            });

            // create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
}

// sign in user with password bycrypt and jwt

exports.signInUser = (req, res) => {
    const { email, password } = req.body;

    // simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });

    }

    // check for existing user




}
























// update user

exports.updateUser = (req, res) => {

    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}


// delete user

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//

// Path: server/routes/user.route.js