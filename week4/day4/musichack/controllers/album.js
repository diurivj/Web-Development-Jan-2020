const Artist = require("../models/Artist");
const Album = require("../models/Album");

exports.createAlbumView = async (req, res) => {
  const artists = await Artist.find();
  res.render("album-create", { artists });
};

exports.createAlbum = async (req, res) => {
  const { name, genre, image, artistId } = req.body;
  const newAlbum = await Album.create({
    name,
    genre,
    image,
    artist: artistId
  });
  console.log(newAlbum);
  await Artist.findByIdAndUpdate(artistId, { $push: { albums: newAlbum._id } });
  res.redirect("/");
};
