const express = require('express')

const { home, getAllUsers, postUser, deleteUser, displaySingleUser, updateUser, loginUser } = require('../controllers/controller');

const router = express.Router()

router.get('/', home)

router.get('/users', getAllUsers)

router.post('/users/:id/sign-up', postUser)

router.post('/users/login', loginUser)

router.delete('/users/:id', deleteUser)

router.get('/users/:id', displaySingleUser)

router.put('/users/:id', updateUser)


module.exports = {
    router
}