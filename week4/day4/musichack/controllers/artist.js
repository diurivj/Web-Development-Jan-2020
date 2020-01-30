const Artist = require("../models/Artist");

// R en CRUD
exports.getAllArtists = async (req, res) => {
  const artists = await Artist.find().populate("albums");
  res.render("home", { artists });
};

// C en CRUD
exports.createArtistView = (req, res) => {
  res.render("createArtist");
};
exports.createArtist = async (req, res) => {
  const { name, genre } = req.body;
  await Artist.create({
    name,
    genre
  });
  res.redirect("/");
};

// U en CRUD
exports.updateArtistView = async (req, res) => {
  const artist = await Artist.findById(req.params.artistId);
  res.render("update-artist", artist);
};

exports.updateArtist = async (req, res) => {
  const { name, genre } = req.body;

  await Artist.findByIdAndUpdate(req.params.artistId, { name, genre });

  res.redirect("/");
};

// D en CRUD

exports.deleteArtist = async (req, res) => {
  await Artist.findByIdAndDelete(req.params.artistId);
  res.redirect("/");
};
