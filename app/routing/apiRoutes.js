const friendList = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendList);
      });
    app.post("/api/friends", (req, res) => {
        friendList.push(req.body);
      });
}