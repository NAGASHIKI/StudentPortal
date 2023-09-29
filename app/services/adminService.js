const Admin = require("../models/adminModel");

const create = async (data) => {
  let admin = new Admin(data);
  await admin.save();
};

const getAll = async () => {
  let admin = await Admin.find();
  return admin;
};

const getOne = async (id) => {
  let admin = await Admin.findById(id);
  return admin;
};

const update = async (id, data) => {
  let admin = await Admin.findByIdAndUpdate(id, data);
  return admin;
};

const remove = async (id, data) => {
  let admin = await Admin.findByIdAndDelete(id, data);
  return admin;
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
