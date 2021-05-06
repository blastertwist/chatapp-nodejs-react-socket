require('dotenv').config()
const app = require('express').Router()
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const tokenVerifier = require('../middleware/tokenVerifier')

//  Models
const User = require('../database/models/User')
const UserProfile = require('../database/models/UserProfile')

app.post('/register', async (req, res, next) => {
    try {
        console.log(req.body)
        const isExists = await User.findOne({ username: req.body.username })
        if (isExists) {
            res.status(401).send({
                'status': 'REGISTER_FAILED',
                'message': 'Register an account is failed, user already exists',
            })
        } else {
            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const user = new User({
                username: req.body.username,
                password: hash,
            })

            const userProfile = new UserProfile({
                userId: user._id,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            })
            await user.save()
            await userProfile.save()

            res.status(201).send({
                'status': 'REGISTER_SUCCESS',
                'message': 'Register an account is success...',
                'user': { user, userProfile }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({
            'status': 'REGISTER_FAILED',
            'message': 'Server Error, please try again later...',
            'error': err
        })
    }
})

app.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            const isSame = bcrypt.compareSync(req.body.password, user.password);

            if (isSame) {
                const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY);

                res.status(200).send({
                    'status': 'LOGIN_SUCCESS',
                    'message': 'Successfully login to the application..',
                    'token': token
                })
            } else {
                res.status(401).send({
                    'status': 'LOGIN_FAILED',
                    'message': 'Failed login to the application..',
                })
            }
        } else {
            res.status(401).send({
                'status': 'LOGIN_FAILED',
                'message': 'Failed login to the application. user not exists',
            })
        }

    } catch (err) {
        res.status(500).send({
            'status': 'LOGIN_FAILED',
            'message': 'Internal server error...',
        })

    }
})

app.get('/get-user', tokenVerifier, async (req, res, next) => {
    try {
        const profile = await UserProfile.findOne({ userId: res.locals.id })
        if (profile == null) {
            res.status(401).send({
                'status': 'PROFILE_NOT_EXISTS',
                'message': 'Profile not exists, please try to login again...',
            })
        } else {
            res.status(200).send({
                'status': 'GET_PROFILE_SUCCESS',
                'message': 'Successfully get user profile',
                'profile': profile
            })
        }


    } catch (err) {
        res.status(500).send({
            'status': 'GET_PROFILE_FAILED',
            'message': 'Failed get user profile, internal server error..',
            'error': err
        })
    }
})

module.exports = app;