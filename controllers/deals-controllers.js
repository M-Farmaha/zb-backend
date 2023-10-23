import ctrlWrapper from "../decorators/ctrlWrapper.js";
import Deals from "../models/deals.js";

const getAll = async (req, res) => {

    const collection = await Deals.find({});

    res.json(collection);
};

export default {
  getAll: ctrlWrapper(getAll),
};
