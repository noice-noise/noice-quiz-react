import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({ href, children }) {
  return (
    <Link
      to={href}
      className="text-center font-bold text-blue-600 transition-all bg-white px-3 py-4 rounded-2xl w-full hover:scale-110 tracking-wide"
    >
      {children}
    </Link>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.array,
};
