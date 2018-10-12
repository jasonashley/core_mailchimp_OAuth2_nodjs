let rpn = require("request-promise-native");

var options = {
  method: "GET",
  url: "https://login.mailchimp.com/oauth2/authorize",
  qs: {
    response_type: "code",
    client_id: "618203329434",
    redirect_uri: "http://127.0.0.1"
  },
  headers: {
    "Postman-Token": "8879021b-afaf-45ad-b3df-1a6a231e1dcd",
    "cache-control": "no-cache"
  }
};

rpn(options).then(res => {
  console.log(res);
});
