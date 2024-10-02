const teamMember = require('../models/teamMember.models');

const addMember = async (req, res) => {
  try {
    const data = req.body;
  } catch (error) {
    console.log("Failed to adding new member", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to adding new member", error });
  }
};

const getAllMembers = async (req, res) => {
  try {
  } catch (error) {
    console.log("Failed to fetching members", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetching members", error });
  }
};

const getSingleMember = async (req, res) => {
  try {
  } catch (error) {
    console.log("Failed to fetching member ", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetching member", error });
  }
};

const deleteMember = async (req, res) => {
  try {
  } catch (error) {
    console.log("Failed to deleting member", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to deleting member", error });
  }
};

const updateMember = async (req, res) => {
  try {
  } catch (error) {
    console.log("Failed to updating member", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to updating member", error });
  }
};

module.exports = {
  addMember,
  getAllMembers,
  getSingleMember,
  deleteMember,
  updateMember,
};
