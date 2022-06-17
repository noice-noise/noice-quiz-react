import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Choice({ children, onAnswer, correct }, ...props) {
  const [onClickStyle, setOnClickStyle] = useState('');

  useEffect(() => {
    setOnClickStyle('');
  }, [children]);

  const handleClick = (e) => {
    onAnswer({ parent: e.target, answer: children });
    console.log('correct', correct);
    if (children === correct) {
      setOnClickStyle(
        'text-white bg-gradient-to-t from-yellow-500 to-yellow-300'
      );
    } else {
      setOnClickStyle('text-white bg-gradient-to-t from-red-600 to-red-500');
    }
  };

  return (
    <button
      type="button"
      onClick={(e) => handleClick(e)}
      className={`w-full rounded-2xl bg-white px-3 py-4 text-center font-bold tracking-wide text-blue-600 shadow-lg transition-all hover:scale-110 hover:shadow-xl ${onClickStyle}`}
    >
      {children}
    </button>
  );
}

Choice.propTypes = {
  children: PropTypes.any,
  correct: PropTypes.any,
  onAnswer: PropTypes.func,
};
