export const DataServiceMock = {
  getQuizzes() {
    return {
      then(fn) {
        setTimeout(fn({
          quizzes: [
            {id: 1, title: 'Quiz 1', question_ids: [1,2,3]},
            {id: 2, title: 'Quiz 2', question_ids: [1,2,3]},
            {id: 3, title: 'Quiz 3', question_ids: [1,2,3]},
            {id: 4, title: 'Quiz 4', question_ids: [1,2,3]},
            {id: 5, title: 'Quiz 5', question_ids: [1,2,3]}
          ]
        }));
      }
    }
  }
};