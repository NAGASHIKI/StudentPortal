
const User = require("../models/userModel")

const create = async (data) => {
    let user = new User(data)
    return await user.save()
}

const getAll = async () => {
    let user = await User.find()
    return user
}

const getOne = async (id) => {
    let user = await User.findById(id)
    return user
}

const getUserByEmail = async (email) => {
    let user = await User.findOne(email)
    console.log(user)
    return user
}

const update = async (id, data) => {
    let user = await User.findByIdAndUpdate(id, data)
    return user
}

const remove = async (id, data) => {
    let user = await User.findByIdAndDelete(id, data)
    return user
}

module.exports = {
    create, getAll, getOne, update, remove, getUserByEmail
}