import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

export default function End({ score }) {
  const navigate = useNavigate();

  const MAX_RANKING = 10;
  const [player, setPlayer] = useState('');

  const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

  useEffect(() => {
    const btnSubmit = document.getElementById('submit');
    btnSubmit.disabled = !player;
  }, [player]);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const newPlayer = { player, score };
      ranking.push(newPlayer);
      ranking.sort((a, b) => b.score - a.score);
      ranking.splice(MAX_RANKING);
      localStorage.setItem('ranking', JSON.stringify(ranking));
      navigate('/ranking');
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <form
        className="flex w-full flex-col items-center gap-5 px-6 py-4"
        action="/dummy"
        method="post"
        onSubmit={handleSubmit}
      >
        <p className="text-4xl">{score}</p>
        <input
          className="border-border-blue-100 mx-10 w-full rounded-xl border-2 bg-transparent px-6 py-5 text-center tracking-wide placeholder-blue-200 outline-white hover:border-blue-200"
          type="text"
          placeholder="Player Name"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <div className="flex w-full flex-col items-stretch justify-center font-bold">
          <Button id="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>

      <Nav>
        <NavItem href="/game">Play Again</NavItem>
        <NavItem href="/ranking">Rankings</NavItem>
        <NavItem href="/">Home</NavItem>
      </Nav>
    </div>
  );
}

End.propTypes = {
  score: PropTypes.number,
};
