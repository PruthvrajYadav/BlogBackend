const jwt = require("jsonwebtoken")

const isAdmin = async (req, res, next) => {
    try {
        const token = req.header("auth-token")
        const verifyToken = await jwt.verify(token, process.env.SEC)
        if (!verifyToken) return res.status(500).json({ errors: true, message: "token is invalid" })
        if (req.header("admin") !== "admin") return res.status(500).json({ errors: true, message: "you must be Admin" })
        next()
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

module.exports = isAdmin