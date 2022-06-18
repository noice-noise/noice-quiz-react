import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Header from './components/Header';

import NotFound from './pages/NotFound';
import Game from './pages/Game';
import Home from './pages/Home';
import End from './pages/End';

function App() {
  const [player, setPlayer] = useState({ name: 'Unknown', score: 0 });

  const handleQuizEnd = ({ correctCount }) => {
    console.log('hoy');
    console.log(correctCount);
    setPlayer(() => ({ ...player, score: correctCount }));
  };

  return (
    <Router>
      <div className="mx-auto flex h-screen w-screen max-w-2xl flex-col items-center justify-start p-5 md:gap-5 md:p-10">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game" element={<Game onEnd={handleQuizEnd} />} />
          <Route path="/end" element={<End score={player.score} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
