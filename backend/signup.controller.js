const userModel = require("./signup.mode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        let user = await userModel.findOne({ email })

        if (user) {
            return res.status(200).json({ message: "user already exist" })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(401).json({ message: err })
            }
            else {
                let user = await userModel.create({ firstname, lastname, email, password: hash });

                return res.status(200).json({ message: user })

            }
        })

    } catch (error) {
        return res.status(401).json({ message: error })
    }
}

module.exports = signup