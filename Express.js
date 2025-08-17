const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow all domains (simple setup)
app.use(express.json());

app.post("/api/send", (req, res) => {
  // your send logic
});
