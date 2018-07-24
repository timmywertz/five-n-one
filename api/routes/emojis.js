const emojisObj = require("emojis-list");
const { append, map, prop, keys, isNil } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const createEmojis = k => ({
  id: uuid.v4(),
  name: prop(k, emojisObj)
});

let emojis = map(createEmojis, keys(emojisObj));

module.exports = app => {
  app.get("/emojis", (req, res) => {
    res.send(emojis);
  });
  app.post("/emojis", bodyParser.json(), (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message: "Must have a json document {id, name} to post a document"
      });
      return;
    }
    req.body.id = uuid.v4();
    emojis = append(req.body, emojis);
    res.send({ ok: true });
  });
};
