require('code-this-commons/polyfills/string')
const { mongoose: { ObjectId }, models: { User } } = require('code-this-data')

module.exports = userId => {
    String.validate.notVoid(userId)

    return User.findOne({ _id: ObjectId(userId) }, { __v: 0, cart: 0, orders: 0, password: 0 }).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            user.id = user._id.toString()

            delete user._id
            return user
        })
}
