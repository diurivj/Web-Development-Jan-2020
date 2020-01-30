const { Router } = require("express");
const { getAllArtists } = require("../controllers/artist");
const router = Router();

router.get("/", getAllArtists);
// .get("/product/:x", (req, res) => {
//   const { x } = req.params;
//   console.log(req.params);
//   res.send(x);
// })
// .get("/users/:username/books/:bookId", (req, res) => {
//   console.log(req.params);
//   const { username, bookId } = req.params;
//   res.send(`${username}, ${bookId}`);
// })
// .get("/search", (req, res, next) => {
//   console.log(req.user);
//   res.send(req.query);
// })
// .post("/login", (req, res, next) => {
//   res.send(req.body);
// });

module.exports = router;
