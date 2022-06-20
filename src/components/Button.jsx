import PropTypes from 'prop-types';

export default function Button({ onClick, children, ...props }) {
  return (
    <button
      id={props?.id}
      type="button"
      className="flex items-center justify-center rounded-xl border-none bg-white p-2 text-blue-500 transition-all hover:scale-110 active:scale-75 disabled:bg-blue-300 disabled:transition-none disabled:hover:scale-100 md:p-3"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  id: PropTypes.string,
};
