const User = require("../model/user")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

exports.getUser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.register = async (req, res) => {
    try {
        const userExits = await User.findOne({ email: req.body.email })
        if (userExits) return res.status(500).json({ errors: true, message: "email already exit" })

        req.body.password = await bcrypt.hash(req.body.password, 10)

        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}


exports.login = async (req, res) => {
    try {
        const userExits = await User.findOne({ email: req.body.email })
        if (!userExits) return res.status(500).json({ errors: true, message: "email or password is invalid" })

        const validPassword = await bcrypt.compare(req.body.password, userExits.password)
        if (!validPassword) return res.status(500).json({ errors: true, message: "email or password is invalid" })

        const token = await jwt.sign({ _id: userExits._id }, process.env.SEC)
        return res.json({ errors: false, data: { user: userExits, token: token } })


    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}