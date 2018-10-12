const homeRoutes = require("./home");
const authLivechat = require("./livechat/authLivechat");
const authMc = require("./mc/authMc");

module.exports = {
  init: (app, router) => {
    homeRoutes.init(router);
    authLivechat.init(router);
    authMc.init(router);

    app.use("/", router);
  }
};
