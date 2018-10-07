const friendList = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendList);
      });

    app.post("/api/friends", (req, res) => {
        friendList.push(req.body);

    let arrSum = friendList[0].scores.reduce((total, num) => {return total + num});
        console.log(arrSum);
    var userSum = friendList[2].scores;

// Work in progress: once the survay is added to friend.js the scores are compaired to one another and the lowest difference
// is displayed to the user in an overlay.    
    //     userSum = userSum.forEach(item =>{
    //     parseInt(item);
    // });
    console.log(userSum);    
        // userArray = friendList.pop();

        // friendList.forEach(item => {
        //     parseInt(item.scores);
        //     console.log(item.scores);
        // });

      });   
}