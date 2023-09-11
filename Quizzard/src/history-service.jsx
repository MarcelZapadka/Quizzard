import Results from "./components/Results/Results";

export function saveToHistory(quizData) {
  const date = new Intl.DateTimeFormat("en-us", {dateStyle: 'medium'}).format(new Date());
  
  if (localStorage.getItem('HISTORY_INFO')) {
    const history = JSON.parse(localStorage.getItem("HISTORY_INFO"));
    history.push({...quizData, date: date, id: history.length + 1});
    localStorage.setItem("HISTORY_INFO", JSON.stringify(history));
    return
  }
  const history = [{...quizData, date: date, id: 1}]; 
  localStorage.setItem("HISTORY_INFO", JSON.stringify(history));
}

export function deleteFromHistory(quizId) {
  const history = JSON.parse(localStorage.getItem("HISTORY_INFO"));
  const updatedHistory = history.filter(quiz => quiz.id !== quizId)

  if (history.length === 1) {
    localStorage.removeItem("HISTORY_INFO");
    return
  }
  localStorage.setItem("HISTORY_INFO", JSON.stringify(updatedHistory));
}

export function getHistory() {
  return JSON.parse(localStorage.getItem("HISTORY_INFO"));
}

export function getLastQuizInfo() {
  const history = getHistory();
  if (history) {
    const lastQuizIndex = history?.length - 1;
    const lastQuiz = history[lastQuizIndex];
    return <Results correctAnswers={lastQuiz?.score} timeOfCompletion={lastQuiz?.time}/>
  }
  return <p className="result-info">End up your first Quiz to show results!</p>
}
