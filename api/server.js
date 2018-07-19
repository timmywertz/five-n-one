const express = require("express");
const cors = require("cors");
const app = express();
const colorRoutes = require("./routes/colors");
const buzzwordRoutes = require("./routes/buzzwords");
const cookiesRoutes = require("./routes/cookies");
const emojisRoutes = require("./routes/emojis");
const starwarsRoutes = require("./routes/starwars");

app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("5n1 API Server"));

colorRoutes(app);
buzzwordRoutes(app);
cookiesRoutes(app);
emojisRoutes(app);
starwarsRoutes(app);

app.listen(5000);
console.log("Server listening at 5000");
