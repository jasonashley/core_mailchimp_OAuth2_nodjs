const homeRoutes = require("./home")
const authLivechat = require('./livechat/authLivechat')

module.exports = {
  init: (app, router) => {

    homeRoutes.init(router);
    authLivechat.init(router)

    app.use('/', router)
  }

}