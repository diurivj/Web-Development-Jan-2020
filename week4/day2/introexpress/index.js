const express = require("express");

//definir una instancia de express que será nuestro servidor
const app = express();

app.use(express.static("public"));

// app.get("/", (request, response) => {
//   response.send(`
//   <h2>Y dijeron que no iba a hacer nada en 9 semanas</h2>
//   <a href="/posts">posts</a>
//   `);
// });

// app.get("/posts", (req, res) => {
//   res.send("<h1>Posts</h1>");
// });

// app.get("/cat", (request, response, next) => {
//   response.send(`
//     <!doctype html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <title>Cat</title>
//         <link rel="stylesheet" href="/stylesheets/style.css" />
//       </head>
//       <body>
//         <h1>Cat</h1>
//         <p>This is my second route</p>
//         <img src="/images/cool-cat.jpg" />
//         <script src="/javascript/main.js"></script>
//       </body>
//     </html>
//   `);
// });

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/views/home-page.html`);
});

app.get("/cat", (req, res) => {
  res.sendFile(`${__dirname}/views/cat.html`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
