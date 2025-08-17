const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render!");
});

// Example email route (expand later)
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Email request received:", { name, email, message });
  res.json({ success: true, message: "Email request received!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
