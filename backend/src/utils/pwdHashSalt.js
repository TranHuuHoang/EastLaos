const crypto = require('crypto')

const generateRandomSalt = (length) => crypto.randomBytes(Math.ceil(length/2))
                                    .toString('hex') /** convert to hexadecimal format */
                                    .slice(0,length)
const sha512 = (password, salt = -1) => {
    if (salt == -1)
        salt = generateRandomSalt(16)
    const hash = crypto.createHmac('sha512', salt)
    hash.update(password)
    const hashedValue = hash.digest('hex');
    return {
        salt: salt,
        password: hashedValue
    }
}

module.exports = sha512