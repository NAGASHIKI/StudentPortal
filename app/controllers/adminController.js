const adminService = require("../services/adminService");

const create = async (req, res) => {
  try {
    let savedadmin = await adminService.create(req.body);

    res.status(201).json(savedadmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    let admins = await adminService.getAll();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    let admins = await adminService.getOne(req.params.id);
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(req);
};

const update = async (req, res) => {
  try {
    let admins = await adminService.update(req.params.id, req.body);

    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // console.log(req);
};

const remove = async (req, res) => {
  try {
    let admins = await adminService.remove(req.params.id, req.body);

    res.status(200).json(admins);
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
