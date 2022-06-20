import { HiOutlineSparkles } from 'react-icons/hi';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';

function About() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-6 py-4">
      <div className="py-5">
        <HiOutlineSparkles className="h-10 w-10 animate-bounce hover:animate-spin" />
      </div>

      <div className="flex h-full w-full max-w-sm flex-col items-center justify-center gap-3">
        <p className="flex w-full items-center justify-between">
          version
          <span className="ml-3 text-xl">0.0.1</span>
        </p>
        <p className="flex w-full items-center justify-between">
          Author
          <span className="ml-3 text-xl underline">
            <a
              href="https://github.com/noice-noise"
              target="_blank"
              rel="noreferrer"
            >
              noice-noise
            </a>
          </span>
        </p>
        <p className="flex w-full items-center justify-between">
          Project
          <span className="ml-3 text-xl underline">
            <a
              href="https://github.com/noice-noise/noice-quiz-react"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </span>
        </p>
        <p className="flex w-full items-center justify-between">
          Built with<span className="ml-3 text-xl">React & TailwindCSS</span>
        </p>
        <p className="flex w-full items-center justify-between">
          Questions from
          <span className="ml-3 text-xl underline">
            <a href="https://opentdb.com/" target="_blank" rel="noreferrer">
              Open Trivia Database
            </a>
          </span>
        </p>
      </div>
      <Nav>
        <NavItem href="/">Noice!</NavItem>
      </Nav>
    </div>
  );
}

export default About;
