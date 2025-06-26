const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const favoritesRoutes = require("./routes/favorites");
const searchRoutes = require("./routes/search");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
});

app.use("/auth", authRoutes);
app.use("/favorites", favoritesRoutes);
app.use("/search", searchRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running");
});