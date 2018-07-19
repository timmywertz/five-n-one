const starwarsNamesObj = require("starwars-names");
const { map, keys, prop } = require("ramda");
const uuid = require("uuid");

const createStarwarsNames = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, starwarsNamesObj)
});

const starwarsNames = map(createStarwarsNames, keys(starwarsNamesObj));

module.exports = app => {
  app.get("/starwars", (req, res) => {
    res.send(starwarsNames);
  });
};
