const Teacher = require("../models/teacherModel")

const create = async (data) => {
    let teacher = new Teacher(data)
    await teacher.save()
}

const getAll = async () => {
    let teacher = await Teacher.find()
    return teacher
}

const getOne = async (id) => {
    let teacher = await Teacher.findById(id)
    return teacher
}

const update = async (id, data) => {
    let teacher = await Teacher.findByIdAndUpdate(id, data)
    return teacher
}

const remove = async (id, data) => {
    let teacher = await Teacher.findByIdAndDelete(id, data)
    return teacher
}

module.exports = {
    create, getAll, getOne, update, remove
}