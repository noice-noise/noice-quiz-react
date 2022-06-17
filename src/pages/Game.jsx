import { useEffect, useState } from 'react';
import Choice from '../components/Quiz/Choice';

export default function Game() {
  const [quizzes, setQuizzes] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionCount, setQuestionCount] = useState(0);
  const [choices, setChoices] = useState();

  const quizUrl =
    'https://opentdb.com/api.php?amount=10&category=9&type=multiple';

  useEffect(() => {
    fetchQuizzes(quizUrl);
    appendAndShuffleChoices();
  }, [quizUrl]);

  useEffect(() => {
    console.log('quiz cg');
    if (!quizzes) {
      return;
    }
    setCurrentQuestion(quizzes[currentQuestionCount]);
    setChoices([]);
  }, [quizzes, currentQuestion, currentQuestionCount]);

  useEffect(() => {
    console.log('quiz cg');
    if (!quizzes) {
      return;
    }
    appendAndShuffleChoices();
  }, [quizzes, currentQuestion, currentQuestionCount]);

  const fetchQuizzes = (url) => {
    console.log('Fetching');
    fetch(url, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          console.log('err?');
          throw new Error('Could not fetch data.');
        }
        return res.json();
      })
      .then((data) => {
        setQuizzes([...data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const appendAndShuffleChoices = () => {
    if (!currentQuestion) {
      return;
    }

    const sortedChoices = [
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ];

    sortedChoices.sort(() => Math.random() - 0.5);
    console.log(choices);
    setChoices([...sortedChoices]);
  };

  const onAnswer = ({ parent, answer }) => {
    if (answer === currentQuestion.correct_answer) {
      console.log('Correct');
    }
    setQuestionCount(currentQuestionCount + 1);
  };

  return (
    <div className="w-full max-w-xl px-10">
      <div className="mb-10">
        <div className="text-xl font-bold tracking-tight">
          {currentQuestion && currentQuestion?.question}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        {choices &&
          choices.map((choice) => (
            <Choice
              onAnswer={onAnswer}
              correct={currentQuestion.correct_answer}
            >
              {choice}
            </Choice>
          ))}
      </div>
    </div>
  );
}
