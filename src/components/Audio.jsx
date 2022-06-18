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
    console.log('audio on supposedly');
    play();
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
        className="absolute top-3 right-3 rounded-lg border-none bg-white p-2 text-blue-500 transition-all active:scale-75 md:top-5 md:right-5 md:p-3 lg:top-7 lg:right-7"
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
