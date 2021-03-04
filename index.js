const { rest } = require("msw");
const { setupServer } = require("msw/node");
const request = require("superagent");
const fetch = require("node-fetch");

setupServer(
  rest.get("https://google.com", (req, res, ctx) => {
    return res(ctx.status(200), ctx.text("Hi from google"));
  })
).listen();

request.get("https://google.com").end(); // -> throws an error

// fetch("https://google.com")
//   .then((res) => res.text())
//   .then(console.log); -> works just fine
