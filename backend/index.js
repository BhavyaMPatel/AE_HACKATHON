//Backend For Request Resolver

const express = require("express");
//to parse body from url
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
//Routes
app.get('/', async (req, res) => {
    res.send("Hi")
});
const port=1000;
app.listen(port, () => {
  console.log(`Application live on localhost:{process.env.PORT}`);
});
