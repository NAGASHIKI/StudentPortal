const Announcement = require("../models/announcementModel");

const create = async (data) => {
  let announcement = new Announcement(data);
  await announcement.save();
};

const getAll = async () => {
  let announcement = await Announcement.find();
  return announcement;
};

module.exports = {
  create,
  getAll,
};
