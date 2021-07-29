const express = require("express");
const cors = require("cors");
const passport = require("passport");
const db = require("./db/models");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

// Routes
const katakeetRoutes = require("./routes/katakeet");
const userRoutes = require("./routes/user");

// Create App instance
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // gives you acces to the req.body as JSON

// Passport Setup
app.use(passport.initialize());
passport.use(jwtStrategy);
passport.use(localStrategy);

// Routes
app.use(userRoutes);
app.use("/katakeet", katakeetRoutes);

// Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

// Error Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" });
});

db.sequelize.sync();

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`The application runs on localhost:${PORT}`)
);
