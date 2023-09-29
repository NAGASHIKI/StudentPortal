const Student = require("../models/studentModel")

const create = async (data) => {
    let student = new Student(data)
    await student.save()
}

const getAll = async () => {
    let student = await Student.find().populate("user")
    return student
}

const getOne = async (id) => {
    let student = await Student.findById(id)
    return student
}

const update = async (id, data) => {
    let student = await Student.findByIdAndUpdate(id, data)
    return student
}

const remove = async (id, data) => {
    let student = await Student.findByIdAndDelete(id, data)
    return student
}

module.exports = {
    create, getAll, getOne, update, remove
}