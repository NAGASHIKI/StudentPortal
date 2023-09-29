const studentService = require("../services/studentService");
const userService = require("../services/userService");
const {hashPassword} = require ("../utils/helper")

const create = async (req, res) => {
  try {
    let password = hashPassword("pdsswoed8");
    let email = req.body.email;
    let telephone = req.body.telephone;
    let userData = { email, telephone, password };

    let createdUser = await userService.create(userData);

    // console.log(user)
    let user = createdUser._id;
    console.log({ ...req.body, user });

    let savedStudent = await studentService.create({ ...req.body, user });

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    let students = await studentService.getAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    let students = await studentService.getOne(req.params.id);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(req);
};

const update = async (req, res) => {
  try {
    let students = await studentService.update(req.params.id, req.body);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(req);
};

const remove = async (req, res) => {
  try {
    let students = await studentService.remove(req.params.id, req.body);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(req);
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
