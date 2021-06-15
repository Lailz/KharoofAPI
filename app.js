const express = require("express");
// Routes
const katakeetRoutes = require("./routes/katakeet");

// Create App instance
const app = express();

// Middleware
app.use(express.json()); // gives you acces to the req.body as JSON

// Routes
app.use("/katakeet", katakeetRoutes);

const PORT = 8080;

app.listen(PORT, () =>
  console.log(`The application runs on localhost:${PORT}`)
);
