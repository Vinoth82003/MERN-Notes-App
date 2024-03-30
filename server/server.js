const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || "";
// console.log("line 10 : " + DB_URL);
// bb
const corsOptions = {
  origin: "*", // Replace with your React frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/todos", todoRoutes);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
