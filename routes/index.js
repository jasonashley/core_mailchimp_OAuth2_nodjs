const homeRoutes = require("./home")

module.exports = {
  init: (app, router) => {

    homeRoutes.init(router);

    app.use('/', router)
  }

}