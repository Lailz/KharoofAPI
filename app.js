const express = require("express");
const data = require("./data"); // FAKE DATABASE

const app = express();

app.use(express.json()); // gives you acces to the req.body as JSON

// CRUD: CREATE / -READ- / UPDATE / DELETE

// KATAKEET CREATE ROUTE
app.post("/katakeet", (req, res) => {
  req.body.id = data[data.length - 1].id + 1;
  data.push(req.body);
  res.status(201).json(req.body);
});

// KATAKEET LIST ROUTE
app.get("/katakeet", (request, response) => {
  response.json(data);
});

// KATAKEET DETAIL ROUTE
app.get("/katakeet/:katkootId", (req, res) => {
  const foundKatkoot = data.find(
    (katkoot) => katkoot.id === +req.params.katkootId
  );
  if (foundKatkoot) {
    res.json(foundKatkoot); // --> json: ends the response
  } else {
    // res.status(404); // --> status: does NOT end the response
    // res.end(); // --> end: ENDS the response with no content returned
    // res.status(404).end();
    res.status(404).json({ message: "Path Not Found" });
  }
});

const PORT = 8080;

app.listen(PORT, () =>
  console.log(`The application runs on localhost:${PORT}`)
);

// RESTful APIs
// Representational State Transfer
