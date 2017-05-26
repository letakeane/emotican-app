export const analyzeResponse = (response) => {
  let scores = response[0].Scores;
  let emotions = Object.keys(scores);
  let sortedEmotions = emotions.sort((a, b) => {
    return scores[b] - scores[a];
  })
  let emotionDisplay = sortedEmotions.map(emotion => {
    if (scores[emotion] > 0.75) {
      return `mostly <span className="emotion-score">${emotion.toLowerCase()}</span>`
    } else if (scores[emotion] < 0.75 && scores[emotion] > 0.05) {
      return `a little <span className="emotion-score">${emotion.toLowerCase()}</span>`
    }
  })
  return emotionDisplay
}
