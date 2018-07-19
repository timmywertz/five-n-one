const fortuneCookiesObj = require("fortune-cookie");
const { map, prop, keys } = require("ramda");
const uuid = require("uuid");

const createCookies = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, fortuneCookiesObj)
});

const fortunecookies = map(createCookies, keys(fortuneCookiesObj));

module.exports = app => {
  app.get("/fortune-cookies", (req, res) => {
    res.send(fortunecookies);
  });
};
