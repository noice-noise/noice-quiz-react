import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({ href, children }) {
  return (
    <Link
      to={href}
      className="hover:cta-pattern w-full rounded-2xl bg-white px-3 py-4 text-center font-bold tracking-wide text-blue-600 transition-all hover:scale-110"
    >
      {children}
    </Link>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};
