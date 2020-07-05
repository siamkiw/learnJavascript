
const express = require('express')
const { check, validationResult } = require('express-validator')

const { handleErrors } = require('./middlewares')
const userRepo = require('../../repositories/users')
const singupTemplate = require('../../views/admin/auth/singup')
const singinTemPlate = require('../../views/admin/auth/singin')
const { requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPasswordForUser } = require('./validators')

const router = express.Router()

router.get('/singup', (req, res) => {
    res.send(singupTemplate({ req }))
})


router.post('/singup',
    [
        requireEmail,
        requirePassword,
        requirePasswordConfirmation
    ],
    handleErrors(singupTemplate),
    async (req, res) => {
        const { email, password } = req.body
        // create a user in our user repo to represent this person   
        const user = await userRepo.create({ email, password })
        // Store the id user inside the user cookie
        // session === {} come from cookie-session
        req.session.userId = user.id
        return res.redirect('/admin/products')
    })

router.get('/singout', (req, res) => {
    req.session = null
    res.send('You are logged out.')
})


router.get('/singin', (req, res) => {
    res.send(singinTemPlate({}))
})

router.post('/singin',
    [
        requireEmailExists,
        requireValidPasswordForUser
    ],
    handleErrors(singinTemPlate),
    async (req, res) => {
        const { email } = req.body

        const user = await userRepo.getOneBy({ email })

        req.session.userId = user.id
        return res.redirect('/admin/products')
    })

module.exports = router