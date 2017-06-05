const analyzeResponse = (data) => {
  const scores = data[0].scores;
  const emotions = Object.keys(scores);
  const sortedEmotions = emotions.sort((a, b) => {
    return scores[b] - scores[a];
  })
  const emotionDisplay = sortedEmotions.map(emotion => {
    if (scores[emotion] > 0.49) {
      return {quantifier: 'mostly',
              emotion: emotion.toLowerCase()}
    } else if (scores[emotion] < 0.49 && scores[emotion] > 0.25) {
      return {quantifier: 'a little bit of',
              emotion: emotion.toLowerCase()}
    }
  })
  return emotionDisplay
}

export default analyzeResponse;
