const bcrypt = require('bcrypt');

module.exports.hashPassword = async(password) => {
    const salt = await bcrypt.genSalt() ;
    const hash = await bcrypt.hash(password , salt) ;
    return hash ;
}

module.exports.comparePassword = async(password , hashedPassword) => {
    const isMatch = await bcrypt.compare(password , hashedPassword) ;
    return isMatch ;
}