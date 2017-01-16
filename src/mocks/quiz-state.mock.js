export const QuizStateMock = {
  results: [],
  getQuizzesResults() {
    return QuizStateMock.results;
  },
  _addQuizResult(id, result) {
    QuizStateMock.results.push({id, result});
  },
  mostDifficultResolvedQuiz: 0,
  getMostDifficultResolvedQuiz() {
    return QuizStateMock.mostDifficultResolvedQuiz;
  },
  _setMostDifficultResolvedQuiz(value) {
    QuizStateMock.mostDifficultResolvedQuiz = value;
  },
  _reset() {
    QuizStateMock.mostDifficultResolvedQuiz = 0;
    QuizStateMock.results = [];
  },
  saveQuizResult() {
    return {
      then(fn) {
        setTimeout(fn());
      }
    }
  }
};