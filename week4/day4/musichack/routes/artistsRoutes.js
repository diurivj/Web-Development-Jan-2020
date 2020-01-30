const { Router } = require("express");
const {
  createArtist,
  createArtistView,
  updateArtist,
  updateArtistView,
  deleteArtist
} = require("../controllers/artist");
const router = Router();

router
  .get("/create-artist", createArtistView)
  .post("/create-artist", createArtist)
  .get("/update-artist/:artistId", updateArtistView)
  .post("/update-artist/:artistId", updateArtist)
  .get("/delete-artist/:artistId", deleteArtist);
module.exports = router;
