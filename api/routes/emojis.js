const emojisObj = require("emojis-list");
const { map, prop, keys } = require("ramda");
const uuid = require("uuid");

const createEmojis = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, emojisObj)
});

const emojis = map(createEmojis, keys(emojisObj));

module.exports = app => {
  app.get("/emojis", (req, res) => {
    res.send(emojis);
  });
};
