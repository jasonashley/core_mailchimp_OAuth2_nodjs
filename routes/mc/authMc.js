const authMc = require("../../controllers/mc/authMc");

// export init method that takes router
module.exports = {
  init: router => {
    router.route("/auth/mc").get(authMc.getAuthMc);

    router.route("/auth/mc/callback").get(authMc.getAuthMcCallback);
  }
};
