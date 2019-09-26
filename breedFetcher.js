let request = require("request");
let args = process.argv.splice(2);
const searchReq = args.toString();
const catAPI = `https://api.thecatapi.com/v1/breeds/search/?q=${searchReq}`;
const notFoundErr = "Breed not found, try again";
const requestFailed = "request failed";
request(catAPI, (error, response, body) => {
  if (error) {
    console.log(requestFailed);
    throw error;
  } else if (error === null) {
    const data = JSON.parse(body);
    if (response["body"] === "[]") {
      throw notFoundErr;
    } else {
      console.log(data[0]["description"]);
    }
  }
});