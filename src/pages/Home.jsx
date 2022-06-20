import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

export default function Home() {
  return (
    <Nav>
      <div className="py-5">
        <HiOutlineEmojiHappy className="h-10 w-10 animate-bounce hover:animate-spin" />
      </div>
      <NavItem href="/game">Play</NavItem>
      <NavItem href="/ranking">Rankings</NavItem>
      <NavItem href="/about">About</NavItem>
    </Nav>
  );
}
