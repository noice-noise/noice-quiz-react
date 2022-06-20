import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi';

export default function Audio({ soundFileName, ...props }) {
  const [muted, setMuted] = useState(false);
  const play = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.volume = 0.6;
    audioEl.play();
  };

  useEffect(() => {
    try {
      play();
    } catch (err) {
      console.dir('Error', err);
    }
  }, []);

  const handleClick = () => {
    console.log('audio clicked!');
    setMuted(() => !muted);
  };

  return (
    <>
      <audio loop muted={muted} className="audio-element">
        <source src={`/sounds/${soundFileName}`} type="audio/mp3" />
        <track kind="captions" />
      </audio>
      <button
        type="button"
        data-tip
        data-for="audioTip"
        onClick={() => handleClick()}
        className="flex items-center justify-center rounded-lg border-none bg-white p-2 text-blue-500 transition-all hover:scale-110 active:scale-75 md:p-3"
      >
        {muted ? (
          <HiVolumeOff className="h-5 w-5" />
        ) : (
          <HiVolumeUp className="h-5 w-5" />
        )}
      </button>
    </>
  );
}

Audio.propTypes = {
  soundFileName: PropTypes.string,
  muted: PropTypes.bool,
};
