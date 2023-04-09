const express = require("express");
const NewsAPI = require('newsapi');
const bodyParser = require("body-parser");
const app = express();
const newsapi = new NewsAPI('Api_key');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let articles = "";

app.get("/tech", async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({ category: 'technology', language: 'en' });
    const data = response.articles;
    articles = data;
    res.render("index", { articles });
  } catch (error) {
    console.log(error);
    res.render("index", { articles });
  }
});

app.get("/", async (req, res) => {
  res.redirect('science')
});


app.get("/business", async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({ category: 'business', language: 'en' });
    const data = response.articles;
    articles = data;
    res.render("index", { articles });
  } catch (error) {
    console.log(error);
    res.render("index", { articles });
  }
});

app.get("/entertainment", async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({ category: 'entertainment', language: 'en' });
    const data = response.articles;
    articles = data;
    res.render("index", { articles });
  } catch (error) {
    console.log(error);
    res.render("index", { articles });
  }
});

app.get("/science", async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({ category: 'science', language: 'en' });
    const data = response.articles;
    articles = data;
    res.render("index", { articles });
  } catch (error) {
    console.log(error);
    res.render("index", { articles });
  }
});

app.get("/sports", async (req, res) => {
  try {
    const response = await newsapi.v2.topHeadlines({ category: 'sports', language: 'en' });
    const data = response.articles;
    articles = data;
    res.render("index", { articles });
  } catch (error) {
    console.log(error);
    res.render("index", { articles });
  }
});

app.post("/submit", (req, res) => {
  const category = req.body.button;
  res.redirect(`/${category}`);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
