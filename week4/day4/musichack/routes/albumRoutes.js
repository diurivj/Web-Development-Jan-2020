const { Router } = require("express");
const { createAlbumView, createAlbum } = require("../controllers/album");
const router = Router();

router.get("/create-album", createAlbumView).post("/create-album", createAlbum);

module.exports = router;
