import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

export default function End({ score }) {
  return (
    <div className="w-full">
      <p>Woooo</p>
      <p>{score}</p>
      <Nav>
        <NavItem href="/game">Play Again</NavItem>
        <NavItem href="/">Home</NavItem>
      </Nav>
    </div>
  );
}

End.propTypes = {
  score: PropTypes.number,
};
