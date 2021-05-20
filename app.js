const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();


    'I love basketball', 'I live in Arkansas', 'My dogs name is copper'


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (request, response) {
    response.render("index",{
    user: "Michael",
    info:['I love basketball', 'I live in Arkansas', 'My dogs name is copper']
    }) 
})

app.get("/photo-fun", function (req, res){
    res.render("photos",{

    })
})

app.get("/:pet/:age", function (req, res){
    res.render("pets", {pet: req.params.pet, age: req.params.age})
})


app.listen(3000, function () {
    console.log(`Server is running on PORT: ${3000}`);
});