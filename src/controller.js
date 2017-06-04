// const request = require('request')
// require('dotenv').load()
// const API_KEY = process.env.EMOTION_KEY
//
// function getEmotionAnalysis(req, res) {
//   request({
//     url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/octet-stream',
//       'Ocp-Apim-Subscription-Key': API_KEY
//     },
//     body: faceBlob
//   },
//    function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body)
//     }
//   })
// }
//
// module.exports = {
//   getEmotionAnalysis: getEmotionAnalysis,
//   postImageURL: postImageURL,
//   getImageURL: getImageURL
// };
