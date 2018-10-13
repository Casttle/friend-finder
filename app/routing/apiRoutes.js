const friendList = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendList);
      });

    app.post("/api/friends", (req, res) => {
        let bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
            };
        let scores = req.body.scores;
        let totalDifference;
   
    for (let i = 0; i < friendList.length; i++) {
        let currentFriend = friendList[i];
        totalDifference = 0;

        for (let j = 0; j < currentFriend.scores.length; j++) {
          let currentFriendScore = currentFriend.scores[j];
          let currentUserScore = scores[j];

          totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
        }
        if (totalDifference <= bestMatch.difference) {
          bestMatch.name = currentFriend.name;
          bestMatch.photo = currentFriend.photo;
          bestMatch.difference = totalDifference;
        }
      }
      friendList.push(req.body);
  console.log(bestMatch)
    res.json(bestMatch);       
      });   
}