module.exports = {

  getHome: (req, res) => {
    res.status(200).json({
      "message": "worked as expected: Hello World"
    })
  }

}