let qstring = require("qs");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

var apiKey = `${process.env.benchmark_email_api_token}`;
module.exports = {
  getAuthMc: (req, res) => {
    var options = {
      url: process.env.mc_oauth2_code_request_url,
      qs: {
        response_type: "code",
        client_id: process.env.mc_oauth2_client_id,
        redirect_uri: process.env.mc_oauth2_redirect_uri
      }
    };

    let mcQs = qstring.stringify(options.qs);
    let fullPath = `${options.url}?${mcQs}`;
    res.redirect(fullPath);
  },

  getAuthMcCallback: (req, res) => {
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
