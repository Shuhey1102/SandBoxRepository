const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const MEDIA_DIR = path.join(__dirname, "media");

// 静的配信
app.use("/media", express.static(MEDIA_DIR));

app.get("/api/media", (req, res) => {
  fs.readdir(MEDIA_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "フォルダ読み込み失敗" });
    }

    const images = files.filter(file =>
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    const videos = files.filter(file =>
      /\.(mp4|mov)$/i.test(file)
    );

    res.json({
      images,
      videos
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});