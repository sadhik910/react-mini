let express = require("express");
let app = express();
let cors = require("cors");
let bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/login",require("./login/login"));
app.use("/angular",require("./angular/angular"));
app.use("/react",require("./react/react"));
app.use("/nodejs",require("./nodejs/nodejs"));
app.use("/logout",require("./logout/logout"));
app.listen(8080);
console.log("server is running on port num:8080")