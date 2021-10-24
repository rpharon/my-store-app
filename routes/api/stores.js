const express = require('express')
const router = express.Router()
const Store = require('../../models/store')

//Get all stores
router.get('/', async (req, res) => {
    try {
        const stores = await Store.find()

        res.status(200).json(stores)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Get single store
router.get('/:id', async (req, res) => {
    try {
        const store = await Store.findById(req.params.id)

        if(store == null) {
            res.status(404).json({ message: 'Store not found.' })   
        }
        else {
            res.status(200).json(store)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Create a store
router.post('/', async (req, res) => {

    const store = await Store.findOne({
        name: req.body.name
    })

    if(store != null) {
        res.status(404).json({ message: 'Store already existed' })
    }
    else {
        const store = new Store({
            name: req.body.name,
            owner: req.body.owner,
            address: req.body.address,
            about: req.body.about,
            dateAdded: req.body.dateAdded
        })
    
        try {
            const newStore = await store.save()        
            res.status(200).json(newStore)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
})
//Update a store
router.patch('/:id', async (req, res) => {
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true        
        })

        try {
            const updatedStore = await store.save()
            res.status(200).json(updatedStore)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    } catch (err) {
        res.status(400).json({ message: 'Store name already exists. Please choose other names.' })
    }
})
//Delete a store
router.delete('/:id', async (req, res) => {
    const store = await Store.findById(req.params.id)

    try {
        await store.remove()
        res.status(200).json({ message: 'Store is deleted.' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router