import React from 'react';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

export default function Home() {
  return (
    <Nav>
      <NavItem href="/game">Play</NavItem>
      <NavItem href="/ranking">Ranking</NavItem>
      <NavItem href="/about">About</NavItem>
    </Nav>
  );
}
