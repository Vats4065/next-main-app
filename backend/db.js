const mongoose = require('mongoose')

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://food:food@cluster0.gmogt9p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = db;