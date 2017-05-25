const request = require('request')
const API_KEY = require('./key')
const BASE_URL = `https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize`
const IMAGE_URL = 'localhost:300/image'


function getEmotionAnalysis(req, res) {
  request({
    url: BASE_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': API_KEY
    },
    body: JSON.stringify({url: IMAGE_URL})
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function postImageURL(req, res) {         //FIGURE OUT HOW TO INSERT FACEURL FROM IMAGECAPTURE
  request({
    url: '/API/imageURL',
    method: 'POST',
    body: JSON.stringify({url: /*FACEURL GOES HERE SOMEHOW!!!*/})
  })
  function (error, response, body) {
   if (!error && response.statusCode == 200) {
     res.send(body)
   }
 })
}

function getImageURL(req, res) {        //FIGURE OUT HOW TO GET THE IMAGE URL FROM THE BACKEND
  request({
//MAGIC HAPPENS HERE?????????
  })
}

module.exports = {
  getEmotionAnalysis: getEmotionAnalysis,
  postImageURL: postImageURL,
  getImageURL: getImageURL
};
