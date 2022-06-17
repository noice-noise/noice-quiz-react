import Nav from './Nav';
import NavItem from './NavItem';

function Navbar() {
  return (
    <Nav>
      <NavItem href="/play">Play</NavItem>
      <NavItem href="/ranking">Ranking</NavItem>
      <NavItem href="/about">About</NavItem>
    </Nav>
  );
}

export default Navbar;
