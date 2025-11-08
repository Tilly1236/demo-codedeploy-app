const express = require("express");
const path = require("path");
const app = express();

// Serve static files (index.html, css, images) from repo root
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Elastic Beanstalk sets PORT via env var (often 8081)
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on port ${port}`));
