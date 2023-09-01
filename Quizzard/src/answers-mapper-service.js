export default function getAllAnswers(question) {
  const allAnswers = question.incorrectAnswers.map(answer => answer);
  allAnswers.push(question.correctAnswer);
  shuffleArray(allAnswers);
  return allAnswers;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
