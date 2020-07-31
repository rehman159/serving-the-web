const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Rehman Khan",
  });
});

// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "About Me",
//     name: "Rehman Khan",
//   });
// });

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is might be helpful",
    title: "Help",
    name: "Rehman Khan",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is winter over there",
    location: "Lahore",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Rehman Khan",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Rehman khan",
    errorMessage: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 4000.");
});
