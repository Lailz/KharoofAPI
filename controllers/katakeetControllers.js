const { Katakeet } = require("../db/models");

exports.fetchKatkoot = async (katkootId, next) => {
  try {
    const katkoot = await Katakeet.findByPk(katkootId);
    return katkoot;
  } catch (error) {
    next(error);
  }
};

exports.katakeetCreate = async (req, res, next) => {
  try {
    req.body.shopId = req.user.id;
    const newKatakoot = await Katakeet.create(req.body);
    res.status(201).json(newKatakoot);
  } catch (error) {
    next(error);
  }
};

exports.katakeetDetail = (req, res) => res.json(req.katkoot);

exports.katakeetUpdate = async (req, res, next) => {
  try {
    await req.katkoot.update(req.body);
    res.json(req.katkoot);
  } catch (error) {
    next(error);
  }
};

exports.katakeetDelete = async (req, res, next) => {
  try {
    await req.katkoot.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.katakeetList = async (req, res, next) => {
  try {
    const katakeets = await Katakeet.findAll({
      attributes: {
        exclude: ["updatedAt"],
      },
    }); // findAll is asynchronous
    res.json(katakeets);
  } catch (error) {
    next(error);
  }
};
