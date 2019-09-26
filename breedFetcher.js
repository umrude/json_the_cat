let request = require("request");
const notFoundErr = "Breed not found, try again";
// const requestFailed = "request failed";

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (error === null) {
      const data = JSON.parse(body);
      if (response["body"] === "[]") {
        callback(notFoundErr, null);
      } else {
        callback(null, data[0]["description"].trim());
      }
    }
  });
};

module.exports = { fetchBreedDescription };





