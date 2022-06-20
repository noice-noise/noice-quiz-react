import { HiOutlineStar } from 'react-icons/hi';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

export default function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="py-5">
        <HiOutlineStar className="h-10 w-10 animate-bounce hover:animate-spin" />
      </div>

      <h1 className="mb-8 text-center text-3xl">Rankings</h1>

      <ul className="mb-8 flex h-full min-h-fit w-full flex-col gap-4 overflow-y-auto">
        <li className="grid w-full grid-cols-3 items-center justify-center gap-4 text-center">
          <p>Rank</p>
          <p>Player</p>
          <p>Score</p>
        </li>
        {ranking &&
          ranking.map((rank, index) => (
            <li className="grid w-full grid-cols-3 items-center justify-center gap-4 text-center">
              <span>{index + 1}</span>
              <span>{rank.player}</span>
              <span>{rank.score}</span>
            </li>
          ))}

        {ranking?.length <= 0 && (
          <p className="text-center text-sm">
            No players in your machine, bored enough to play the game (yet).
          </p>
        )}
      </ul>
      <Nav>
        <NavItem href="/">Home</NavItem>
      </Nav>
    </div>
  );
}
