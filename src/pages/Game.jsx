import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  HiCheck,
  HiOutlineCollection,
  HiOutlineEmojiHappy,
  HiOutlineRefresh,
  HiOutlineX,
  HiX,
} from 'react-icons/hi';

import Choice from '../components/Quiz/Choice';
import Audio from '../components/Audio';
import Button from '../components/Button';

export default function Game({ onEnd, category = 9 }) {
  const [quizzes, setQuizzes] = useState(null);
  const [choices, setChoices] = useState();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionCount, setQuestionCount] = useState(0);

  const [isAnswerEntered, setAnswerEntered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  const choiceStyleBase =
    'w-full rounded-2xl bg-white px-3 py-4 text-center font-bold tracking-wide shadow-lg transition-all hover:scale-110 hover:shadow-lg relative';

  const choicesStateStyles = {
    default: `${choiceStyleBase} text-blue-600`,
    correct: `${choiceStyleBase} text-white bg-gradient-to-t from-green-500 to-lime-400`,
    target: `${choiceStyleBase} text-white bg-gradient-to-t from-yellow-500 to-amber-300`,
    incorrect: `${choiceStyleBase} text-white bg-gradient-to-t from-red-600 to-rose-400`,
  };

  const quizUrl = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;

  useEffect(() => {
    fetchQuizzes(quizUrl);
    appendAndShuffleChoices();
    setTimeout(() => {
      setLoading(() => !isLoading);
    }, 1000);
  }, [quizUrl]);

  useEffect(() => {
    if (!quizzes) {
      return;
    }

    setCurrentQuestion(() => quizzes[currentQuestionCount]);
    appendAndShuffleChoices();

    if (currentQuestionCount >= 10) {
      handleEnd();
    }
  }, [quizzes, currentQuestion, currentQuestionCount]);

  const fetchQuizzes = async (url) => {
    try {
      const res = await fetch(url, {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error('Could not fetch data.');
      }

      const data = await res.json();
      setQuizzes([...data.results]);
    } catch (err) {
      console.log(err);
      console.log('Restarting the app...');
      reloadPage();
    }
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
    setChoices([...sortedChoices]);
  };

  const onAnswer = ({ answer }) => {
    setSelectedChoice(answer);
    if (answer === currentQuestion.correct_answer) {
      setCorrectAnswers(() => correctAnswers + 1);
    }
    setAnswerEntered(true);

    setTimeout(() => {
      setQuestionCount(currentQuestionCount + 1);
      setAnswerEntered(false);
    }, 2000);
  };

  const renderChoices = () =>
    choices.map((choice) => {
      if (
        isAnswerEntered &&
        choice === selectedChoice &&
        choice === currentQuestion.correct_answer
      ) {
        return (
          <Choice
            onAnswer={onAnswer}
            stateStyle={choicesStateStyles.target}
            disabled={isAnswerEntered}
          >
            {choice}
            <HiCheck className="absolute inset-y-0 right-5 h-full stroke-2" />
          </Choice>
        );
      }

      if (isAnswerEntered && choice === currentQuestion.correct_answer) {
        return (
          <Choice
            onAnswer={onAnswer}
            stateStyle={choicesStateStyles.correct}
            disabled={isAnswerEntered}
          >
            {choice}
          </Choice>
        );
      }

      if (choice === selectedChoice) {
        return (
          <Choice
            onAnswer={onAnswer}
            stateStyle={choicesStateStyles.incorrect}
            disabled={isAnswerEntered}
          >
            {choice}
            <HiX className="absolute inset-y-0 right-5 h-full stroke-2" />
          </Choice>
        );
      }

      return (
        <Choice
          onAnswer={onAnswer}
          stateStyle={choicesStateStyles.default}
          disabled={isAnswerEntered}
        >
          {choice}
        </Choice>
      );
    });

  const reloadPage = () => {
    window.location.reload(false);
  };

  const handleEnd = () => {
    onEnd({ correctCount: correctAnswers });
    navigate('/end');
  };

  return (
    <div className="h-full w-full max-w-xl px-10">
      <div className="absolute top-3 right-3 flex flex-col gap-2 md:top-5 md:right-5 lg:top-7 lg:right-7">
        <Button onClick={handleEnd}>
          <HiOutlineX className="h-5 w-5" />
        </Button>
        <Button onClick={reloadPage}>
          <HiOutlineRefresh className="h-5 w-5" />
        </Button>
        <Audio soundFileName="bgm.mp3" />
      </div>

      {isLoading && (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <HiOutlineEmojiHappy className="h-10 w-10 animate-spin" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex h-[10%] w-full items-center justify-between">
            <span className="flex items-center gap-3">
              <HiOutlineCollection /> {currentQuestionCount + 1}/
              {quizzes?.length}
            </span>
            <span className="flex items-center gap-3">
              <HiCheck className="" />
              {correctAnswers}
            </span>
          </div>
          <div className="flex h-[40%] min-h-[40%] items-center justify-center">
            <p className="text-xl font-bold tracking-tight">
              {currentQuestion &&
                currentQuestion?.question
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")}
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            {choices && renderChoices()}
          </div>
        </>
      )}
    </div>
  );
}

Game.propTypes = {
  onEnd: PropTypes.func,
  category: PropTypes.string,
};
