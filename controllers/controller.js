const userData = require('../data');

module.exports = {
    home: (req, res) => {
        res.send('Welcome to user management API');
    },

    getAllUsers: (req, res) => {
        res.send(userData)
    },

    postUser: (req, res) => {
        try {
            userData.push(req.body)
            res.status(200).json(userData)
        } catch (error) {
            console.log(error);
        }
    },

    deleteUser: (req, res)=>{
        const id = parseInt(req.params.id)
        const data = userData.filter((data) => data.id !== id)
        res.json(data)
    },

    displaySingleUser: (req, res)=>{
        const id = parseInt(req.params.id)
        const index = userData.findIndex(data => data.id === id)
        res.json(userData[index])
    },
 
    updateUser: (req, res)=>{
        const id = parseInt(req.params.id)
        let updatingData = userData.filter((data) => data.id === id)
        const index = userData.findIndex((data) => data.id === id)
        updatingData = req.body
        userData.splice(index, 1, updatingData)
        res.json(userData) 
    },

    loginUser: (req, res)=>{
        const { username, password } = req.body;
        const user = userData.find((data) => data.name === username && data.password === password);
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }


}