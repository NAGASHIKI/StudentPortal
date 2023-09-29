const announcementService = require("../services/announcementService");

const create = async (req, res) => {
  try {
    let savedAnnouncement = await announcementService.create(req.body);

    res.status(201).json(savedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    let announcements = await announcementService.getAll();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
};
