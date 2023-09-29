const teacherService = require("../services/teacherService");

const create = async (req, res) => {
  try {
    let savedTeacher = await teacherService.create(req.body);

    res.status(201).json(savedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    let teachers = await teacherService.getAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

const getOne = async (req, res) => {
  try {
    let teachers = await teacherService.getOne(req.params.id);
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  // console.log(req);
}

const update = async (req, res) => {
  try {
    let teachers = await teacherService.update(req.params.id, req.body);
    
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  // console.log(req);
}

const remove = async (req, res) => {
  try {
    let teachers = await teacherService.remove(req.params.id, req.body);
    
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  // console.log(req);
}


module.exports = {
  create, getAll, getOne, update, remove
};
