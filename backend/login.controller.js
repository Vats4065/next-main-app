const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./signup.mode");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await userModel.findOne({ email });
        console.log(user);
        if (user) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    return res.status(200).json({ message: "match", data: user });
                } else {
                    return res.status(200).json({ message: "password not match" });
                }
            });
        } else {
            return res.status(401).json({ message: "user not found" });
        }
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};
module.exports = login