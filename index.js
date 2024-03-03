const express = require("express");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());

app.get("/", (req, res) => {
    return res.render("home");
});

app.post("/upload", upload.single("profilePhoto"), (req, res) => {
    return res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server is listning to port : ${PORT}`);
});
