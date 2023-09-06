import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const booked = async (req, res, next) => {
  const userId = req.params.id;
  const hotel = req.body.id;
  try {
    await User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: { booked: hotel },
      }
    );
    res.status(200).json("Hotel Is Added To User");
  } catch (err) {
    res.status(404).json(err);
  }
};

export const cancel = async (req, res, next) => {
  const userId = req.params.id;
  const hotel = req.body.item._id;

  try {
    await User.findByIdAndUpdate(
      { _id: userId },
      { $pull: { booked: hotel } },

      { new: true }
    );
    res.status(200).json("Hotel Is Remove From User");
  } catch (err) {
    res.status(404).json(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
