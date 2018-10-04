module.exports = {

  getAuthLivechat: (req, res) => {
    res.status(200).json({
      "message": "auth worked as expected: Hello World"
    })
  },

  getAuthLivechatCallback: (req, res) => {
    // <--+correction, use req.query
    //       re http://expressjs.com/en/api.html#req.query
    if (!req.query) {
      // <-- bodypoarse and see if  body payload available
      if (req.body) {
        // https://www.youtube.com/watch?v=vKlybue_yMQ
        // npm install body-parser 
        // in app bodyParser = require('body-parser')
        // in app.js app.use(bodyParser())
        // review usage in piesync service 
      } else {
        res.status(401).json({
          "error": "no req.query or req.body found on return call"
        })
      }
    } else {
      res.status(200).json({
        "code is": req.query.code
        // set up request
        // send request 
        // POST https://accounts.livechatinc.com/token
        // grant_type=authorization_code
        // code
        // client_id
        // client_secret
        // redirect_uri

      })
    }
  }

}