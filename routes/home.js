homeController = require("../controllers/home");

module.exports = {
  init: router => {
    router.route("/home").get(homeController.getHome);
  }
};
