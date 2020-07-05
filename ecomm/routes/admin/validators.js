const { check } = require('express-validator')
const userRepo = require('../../repositories/users')

module.exports = {
    requireTitle: check('title')
        .trim()
        .isLength({ min: 1, max: 40 })
        .withMessage('Must Between 5 and 40 characters'),
    requirePrice: check('price').trim().toFloat().isFloat({ min: 1 }).withMessage('Must be a number grater than 1'),
    requireEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .custom(async (email) => {
            const existingUser = await userRepo.getOneBy({ email })
            if (existingUser) {
                throw new Error('Email is used.')
            }
            return true
        }),
    requirePassword: check('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Must be between a and 20 characters.'),
    requirePasswordConfirmation: check('passwordConfirmation')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Must be between a and 20 characters.')
        .custom((passwordConfirmation, { req }) => {
            if (passwordConfirmation !== req.body.password) {
                throw new Error('Password must match')
            }
            return true
        }),
    requireEmailExists: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must provide a valid email')
        .custom(async (email) => {
            const user = await userRepo.getOneBy({ email })
            if (!user) {
                throw new Error('Email not found!')
            }
            return true
        }),
    requireValidPasswordForUser: check('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Must be between a and 20 characters.')
        .custom(async (password, { req }) => {
            const user = await userRepo.getOneBy({ email: req.body.email })
            if (!user) {
                throw new Error('Innvalid Password')
            }
            const vaildPassword = await userRepo.comparePasswords(
                user.password,
                password
            )
            if (!vaildPassword) {
                throw new Error('Innvalid Password')
            }
            return true
        })

}

// requirePasswordConfirmation: check('passwordConfirmation')
//         .trim()
//         .isLength({ min: 4, max: 20 })
//         .withMessage('Must be between a and 20 characters.')
//         .custom((passwordConfirmation, { req }) => {
//             console.log(passwordConfirmation !== req.body.password);
//             console.log(typeof passwordConfirmation, typeof req.body.password);

//             if (passwordConfirmation !== req.body.password) {
//                 throw new Error('Password must match')
//             }
//         })