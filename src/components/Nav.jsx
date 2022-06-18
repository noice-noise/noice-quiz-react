import PropTypes from 'prop-types';

export default function Nav({ children }) {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 px-6 py-4">
      {children}
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.array,
};
