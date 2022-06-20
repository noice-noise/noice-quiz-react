import PropTypes from 'prop-types';

export default function Nav({ children }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6">
      {children}
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.array,
};
