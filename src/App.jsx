import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import NotFound from './pages/NotFound';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="mx-auto flex h-screen w-screen max-w-2xl flex-col items-center justify-start gap-5 p-10">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
