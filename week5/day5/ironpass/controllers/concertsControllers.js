const Concert = require("../models/Concert");
const User = require("../models/User");
const Order = require("../models/Order");

exports.createConcertView = (req, res) => {
  res.render("concerts/create-concert-view");
};
exports.createConcert = async (req, res) => {
  const {
    name,
    price,
    description,
    latitude,
    longitude,
    date,
    capacity,
    genre
  } = req.body;
  const { secure_url: cartel } = req.file;

  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  };

  await Concert.create({
    name,
    price,
    description,
    location,
    date,
    capacity,
    availableTickets: capacity,
    genre,
    cartel
  });
  res.redirect("/");
};
exports.showConcerts = async (req, res) => {
  const concerts = await Concert.find();
  res.render("index", { concerts });
};

exports.buyTicket = async (req, res) => {
  // comprar el ticket...
  // Primero que nada buscamos el concierto
  const concert = await Concert.findOne({ _id: req.params.concertID });
  // 1. verificar que el usuario cuente con los creditos necesarios
  if (req.user.credits < concert.price) {
    res.render("/credits", { message: "You need more credits" });
  }
  // 2. verificar lugares disponibles
  if (concert.availableTickets === 0) {
    res.render("/", { message: ":( " });
  }
  // 3. reducir el costo del ticket de los creditos del usuaio
  const user = await User.findOne({ _id: req.user.id });
  // 4. reducir de los tickets disponibles nuestro nuevo ticket
  concert.availableTickets -= 1;
  // 5. generar la orden
  const order = await Order.create({
    concert: concert.id
  });
  // 6. agregar la orden al usuario
  user.concertOrders.push(order);
  user.credits -= Number(concert.price);
  // 7. agregamos al usuario como asistente del concierto
  concert.attendees.push(user.id);

  await user.save();
  await concert.save();
  res.redirect("/profile");
};
