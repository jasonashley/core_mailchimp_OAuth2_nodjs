module.exports = {
  getAuthLivechat: (req, res) => {
    res.status(200).json({
      message: "auth worked as expected: Hello World"
    });
  },

  getAuthLivechatCallback: (req, res) => {
    if (!req.query) {
      if (req.body) {
      } else {
        res.status(401).json({
          error: "no req.query or req.body found on return call"
        });
      }
    } else {
      res.status(200).json({
        "code is": req.query.code
      });
    }
  }
};
