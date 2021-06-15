const data = require("../data"); // FAKE DATABASE

exports.katakeetCreate = (req, res) => {
  req.body.id = data[data.length - 1].id + 1;
  data.push(req.body);
  res.status(201).json(req.body);
};

exports.katakeetDetail = (req, res) => {
  const foundKatkoot = data.find(
    (katkoot) => katkoot.id === +req.params.katkootId
  );
  if (foundKatkoot) {
    res.json(foundKatkoot); // --> json: ends the response
  } else {
    res.status(404).json({ message: "Path Not Found" });
  }
};

exports.katakeetList = (req, res) => res.json(data);
