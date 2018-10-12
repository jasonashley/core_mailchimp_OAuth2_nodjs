const authLivechat = require("../../controllers/livechat/authLivechat");

// export init method that takes router
module.exports = {
  init: router => {
    router.route("/auth/livechat").get(authLivechat.getAuthLivechat);

    router
      .route("/auth/livechat/callback")
      .get(authLivechat.getAuthLivechatCallback);
  }
};
