const buzzwordsObj = require("buzzwords");
const { append, map, keys, prop, isNil } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const createBuzzwords = k => ({
  id: uuid.v4(),
  name: prop(k, buzzwordsObj)
});

let buzzwords = map(createBuzzwords, keys(buzzwordsObj));

module.exports = app => {
  app.get("/buzzwords", (req, res) => {
    res.send(buzzwords);
  });
  app.post("/buzzwords", bodyParser.json(), (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message: "Must have a json document {name and id} to post a document"
      });
      return;
    }
    req.body.id = uuid.v4();
    buzzwords = append(req.body, buzzwords);
    res.send({ ok: true });
  });
};
