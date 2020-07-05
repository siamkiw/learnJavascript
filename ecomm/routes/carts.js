const express = require('express')

const cartRepo = require('../repositories/carts')
const productsRepo = require('../repositories/products')
const cartsShowTemplate = require('../views/cart/show')
const router = express.Router()

// Receive a post request to add item in cart 
router.post('/cart/products', async (req, res) => {
    let cart
    // req.session.cartId = null
    if (!req.session.cartId) {
        // We dont have a crat, we need yo create one 
        // and store the crat id on the req.session.cartId
        cart = await cartRepo.create({ items: [] })
        req.session.cartId = cart.id


    } else {
        // We have a cart get it from the repository
        cart = await cartRepo.getOne(req.session.cartId)
    }

    const existingItem = cart.items.find(item => item.id === req.body.productId)
    if (existingItem) {
        existingItem.quantity++
    } else {
        cart.items.push({ id: req.body.productId, quantity: 1 })
    }
    await cartRepo.update(cart.id, {
        items: cart.items
    })
    res.redirect('/cart')

})

// Receive a get require to show all item in cart
router.get('/cart', async (req, res) => {
    if (!req.session.cartId) {
        res.redirect('/')
    }
    const cart = await cartRepo.getOne(req.session.cartId)

    for (let item of cart.items) {
        const product = await productsRepo.getOne(item.id)
        item.product = product
        // console.log(item);
    }
    res.send(cartsShowTemplate({ items: cart.items }))
})

// Receive a post request to delete an item from a cart  
router.post('/cart/products/delete', async (req, res) => {
    const { itemId } = req.body
    const cart = await cartRepo.getOne(req.session.cartId)

    const items = cart.items.filter(item => item.id !== itemId)

    await cartRepo.update(req.session.cartId, { items })

    res.redirect('/cart')
})


module.exports = router