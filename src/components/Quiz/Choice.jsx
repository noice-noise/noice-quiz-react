import PropTypes from 'prop-types';

export default function Choice({ children, onAnswer, stateStyle, disabled }) {
  return (
    <button
      type="button"
      onClick={(e) => onAnswer({ answer: children })}
      className={stateStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Choice.propTypes = {
  children: PropTypes.any,
  onAnswer: PropTypes.func,
  stateStyle: PropTypes.any,
  disabled: PropTypes.bool,
};
