// const request = require('request')
// require('dotenv').load()
// const API_KEY = process.env.EMOTION_API_KEY
// const API_URL = `https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize`
// const APP_BASE_URL = 'localhost:3000'       //DOUBLE CHECK THAT THIS RIGHT
//
//
// function getEmotionAnalysis(req, res) {
//   request({
//     url: API_URL,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Ocp-Apim-Subscription-Key': API_KEY
//     },
//     body: JSON.stringify({url: APP_BASE_URL}) //REPLACE WITH CORRECT URL
//   },
//    function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body)
//     }
//   })
// }
//
// function postImageURL(req, res) { //FIGURE OUT HOW TO INSERT FACEURL FROM IMAGECAPTURE
//   request({
//     url: '/API/imageURL',
//     method: 'POST',
//     body: JSON.stringify({url: APP_BASE_URL}) //REPLACE WITH CORRECT URL
//   })
//   function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//      res.send(body)
//    }
//  })
// }
//
// function getImageURL(req, res) { //FIGURE OUT HOW TO GET THE IMAGE URL FROM THE BACKEND in order to display on Image Component
//   request({
// //MAGIC HAPPENS HERE?????????
//   })
// }
//
// module.exports = {
//   getEmotionAnalysis: getEmotionAnalysis,
//   postImageURL: postImageURL,
//   getImageURL: getImageURL
// };
