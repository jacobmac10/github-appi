var express = require('express');
const request = require('request');
var router = express.Router();

const GITHUB_API_USER_REPOS_URL = "https://api.github.com/users/###/repos"

router.post('/user', (req, res, next) =>{
console.log(req.body);

let username = req.body.username;

let url = GITHUB_API_USER_REPOS_URL.replace("###", username);
let options = {
    url: url,
    headers: {
        'User-Agent': 'request'
    }
};

request(options, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage. 

  let repos = JSON.parse(body);
  
  res.send(`the user ${username} has ${repos.length} repositories.`);
});


});

module.exports = router;
