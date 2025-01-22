const User = require('../models/user.model');

async function findOrCreateUser(email) {
    let user = await User.findOne({ email });
    
    if (!user) {
        user = new User({ email });
        await user.save();
    }
    return user;
}

module.exports = { findOrCreateUser };