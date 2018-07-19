const starwarsNamesObj = require("starwars-names");
const { map } = require("ramda");
const uuid = require("uuid");

const createStarwarsNames = k => ({
  id: uuid.v4(),
  name: k
});

const starwarsNames = map(createStarwarsNames, starwarsNamesObj.all);

module.exports = app => {
  app.get("/starwars", (req, res) => {
    res.send(starwarsNames);
  });
};
