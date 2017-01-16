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
  },
  getQuizWithQuestions(id) {
    return {
      then(fn) {
        setTimeout(fn({
          id,
          title: 'Quiz ' + id,
          question_ids: [1, 2, 3],
          questions: [{
            'id': 1,
            'question': 'What is the second largest country (total area)?',
            'answers': [
              'United States',
              'Russia',
              'Canada',
              'China'
            ],
            'correct_answer': 2
          }, {
            'id': 2,
            'question': 'What is the second largest country (total area)?',
            'answers': [
              'United States',
              'Russia',
              'Canada',
              'China'
            ],
            'correct_answer': 2
          }, {
            'id': 3,
            'question': 'What is the second largest country (total area)?',
            'answers': [
              'United States',
              'Russia',
              'Canada',
              'China'
            ],
            'correct_answer': 2
          }]
        }));
      }
    }
  }
};