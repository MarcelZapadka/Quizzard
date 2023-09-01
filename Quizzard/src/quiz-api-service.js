export default async function getQuizzQuestions() {
  const response = await fetch('https://the-trivia-api.com/v2/questions');
  const quizzQuestions = await response.json()
  return quizzQuestions
}
