const userService = require('../services/user.service');

async function getUser(req, res) {
    try {
        const { email } = req.body;
        const user = await userService.findOrCreateUser(email);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getUser };