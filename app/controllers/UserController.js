const userService = require("../services/userService");

const create = async (req, res) => {
  try {
    let savedUser = await userService.create(req.body);

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    let users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

const getOne = async (req, res) => {
  try {
    let users = await userService.getOne(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  // console.log(req);
}

const update = async (req, res) => {
  try {
    let users = await userService.update(req.params.id, req.body);
    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  // console.log(req);
}

const remove = async (req, res) => {
  try {
    let users = await userService.remove(req.params.id, req.body);
    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  // console.log(req);
}


module.exports = {
  create, getAll, getOne, update, remove
};
